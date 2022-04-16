<?php

namespace App\Http\Controllers;

use App\Models\Courrier;
use App\Models\Direction;
use App\Models\Operation;
use App\Models\Role;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

class CourrierController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function sendStats()
	{

		$user = Auth::user();

		return response()->json([

			'internes' => Courrier::where([
				['etape_actuelle', '=', $user->role->grade],
				['type_courrier', '=', 'INTERNE'],
				['statut', '=', 'OUVERT']
			])->count(),


			'entrants' => Courrier::where([
				['statut', '=', 'OUVERT'],
				['type_courrier', '=', 'ENTRANT'],
				// ['etape_actuelle', '=', $user->role->grade]
			])
				->where(function ($query) {
					if (!Gate::allows('ConsultConfidential')) {
						$query->where([
							['type_contenu', '<>', 'LETTRE_DU_PRESIDENT'],
							['mention', '<>', 'CONFIDENTIEL']
						]);
					}
				})
				->whereNotIn('etat', ['REJETE', 'RENVOYE'])
				->cursor()->filter(function ($courrier) {
					$user = Auth::user();
					$direction = Direction::where('directeur_id', $user->id)->first();
					if ($courrier->etat == 'IMPUTE' && $direction) {
						$operation = Operation::where([
							['courrier_id', '=', $courrier->id],
							['type', '=', 'ImputeTo']
						])->first();
						return Gate::allows('ConsultImputed') && in_array($direction->id, explode('$', $operation->donnees));
					} else if (!($courrier->etat == 'IMPUTE')) {
						return $courrier->etape_actuelle == $user->role->grade;
					}
				})->count(),


			'sortants' => Courrier::where([
				['etape_actuelle', '=', $user->role->grade],
				['type_courrier', '=', 'SORTANT'],
				['statut', '=', 'OUVERT']
			])->count()

		]);
	}


	public function consultReceived()
	{
		if (Gate::allows('ConsultReceived')) {
			// $user = Auth::user();
			$listCourrier = Courrier::where([
				['statut', '=', 'OUVERT'],
				['type_courrier', '=', 'ENTRANT'],
				// ['etape_actuelle', '=', $user->role->grade]
			])->where(function ($query) {
				if (!Gate::allows('ConsultConfidential')) {
					$query->where([
						['type_contenu', '<>', 'LETTRE_DU_PRESIDENT'],
						['mention', '<>', 'CONFIDENTIEL']
					]);
				}
			})->whereNotIn('etat', ['REJETE', 'RENVOYE'])
				->cursor()->filter(function ($courrier) {
					$user = Auth::user();
					$direction = Direction::where('directeur_id', $user->id)->first();
					if ($courrier->etat == 'IMPUTE' && $direction) {
						$operation = Operation::where([
							['courrier_id', '=', $courrier->id],
							['type', '=', 'ImputeTo']
						])->first();
						return Gate::allows('ConsultImputed') && in_array($direction->id, explode('$', $operation->donnees));
					} else if (!($courrier->etat == 'IMPUTE')) {
						return $courrier->etape_actuelle == $user->role->grade;
					}
				});

			return  response()->json([
				'success' => true,
				'courriers' => $listCourrier->isEmpty() ? [] : $listCourrier
			]);
		}

		return response()->json(['success' => false, 'message' => "Droits insuffisants"]);
	}


	public function consultDetail(Request $request)
	{

		$request->validate([
			'courrier' => ['required']
		]);

		$courrier = Courrier::find($request->courrier);

		if (!$courrier) {
			return response()->json([
				'success' => false,
				'message' => "Ce courrier est introuvable."
			]);
		}

		if (Gate::allows('Consult', $courrier)) {
			return  response()->json([
				'success' => true,
				'courrier' => $courrier,
				'roles' => Role::all()
			]);
		}

		return response()->json(['success' => false, 'message' => "Droits insuffisants"]);
	}



	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$request->validate([
			'objet' => ['required'],
			'origine' => ['required'],
			'type_contenu' => ['required'],
			'type_courrier' => ['required'],
			'mention' => ['required']
		]);

		$numOrdre = 1;
		$lastCourrier = Courrier::where('type_courrier', $request->type_courrier)
			->where(function ($query) {
				$request = $GLOBALS['request'];
				$query->where(
					'type_contenu',
					$request->type_contenu == 'LETTRE_DU_PRESIDENT' ? '=' : '<>',
					'LETTRE_DU_PRESIDENT'
				);
				if ($request->type_contenu != 'LETTRE_DU_PRESIDENT') {
					$query->where(
						'mention',
						$request->mention == 'CONFIDENTIEL' ? '=' : '<>',
						"CONFIDENTIEL"
					);
				}
			})->whereYear(
				'created_at',
				date('Y')
			)->latest()->get()->first();

		if ($lastCourrier) {
			$numOrdre = $lastCourrier->reference + 1;
		}

		if (!$request->file('courrier')) {
			return response()->json([
				'success' => false,
				'message' => "Le courrier numérique doit être joint."
			]);
		}

		$path = $request->courrier->storePublicly('/public/docs/courriers');

		$courrier = (object)[
			'objet' => $request->objet,
			'origine' => $request->origine,
			'type_contenu' => $request->type_contenu,
			'type_courrier' => $request->type_courrier,
			'reference' => $numOrdre,
			'mention' => $request->mention,
			'url_fichier' => $path,
			'etat' => 'ATTENTE',
			'etape_actuelle' => 0
		];


		if ($courrier->type_courrier !== 'ENTRANT') {
			return response()->json(['success' => false, 'message' => 'Le courrier doit être interne']);
		}

		$user = Auth::user();
		$courrier->etape_actuelle = $user->role->grade + 1;

		$nextUser = Role::where('grade', $courrier->etape_actuelle)->first();

		if (Gate::allows('Register', $courrier)) {
			if (Gate::allows('ValidateOrReject')) {
				$courrier->etat = 'VALIDE';
			}
			DB::beginTransaction();
			try {
				$c = Courrier::create((array)$courrier);
				Operation::create([
					'type' => 'Register',
					'donnees' => "",
					'description' => "Enregistrement d'un courrier entrant",
					'user_id' => $user->id,
					'courrier_id' => $c->id
				]);
				DB::commit();
				return response()->json(['success' => true, 'courrier' => $c->id, 'message' => 'Courrier transféré au ' . $nextUser->description]);
			} catch (Exception $e) {
				// @TODO: IL faut aussi supprimer le fichier uploadé après le rollBack.
				DB::rollBack();
				return response()->json(['success' => false, 'message' => "Erreur interne, veuillez réessayer."]);
			}
		} else {
			return response()->json(['success' => false, 'message' => 'Droits insuffisants']);
		}
	}


	public function sendOperations(Request $request)
	{

		$request->validate([
			'courrier_id' => ['required']
		]);

		$ops = [];
		$operations = Operation::where('courrier_id', $request->courrier_id)->get();
		foreach ($operations as $operation) {
			$op = clone $operation;
			$op->user = $operation->user->role->description;
			$op->courrier = [
				'objet' => $operation->courrier->objet,
				'reference' => $operation->courrier->reference,
				'created_at' => $operation->courrier->created_at,
				'photo' => $operation->courrier->photo
			];
			if ($op->type == 'ImputeTo') {
				$dirs = [];
				foreach (Direction::whereIn('id', explode('$', $operation->donnees))->select('nom')->get() as $dir) {
					$dirs[] = $dir->nom;
				}
				$op->donnees = join(', ', $dirs);
			}
			if ($op->type == 'Annotate') {
				$op->donnees = join('; ', explode('$$', $operation->donnees));
			}
			unset($op->updated_at,
			$op->courrier_id,
			$op->user_id,);
			$ops[] = $op;
		}

		return response()->json($ops);
	}



	public function validateIncoming(Request $request)
	{
		$request->validate([
			'etat' => ['required'],
			'courrier_id' => ['required']
		]);

		if ((in_array($request->etat, ['VALIDE', 'REJETE', 'RENVOYE']) && Gate::allows('ValidateOrReject')) || (($request->etat === 'RETOURNE') && Gate::allows('ReturnTo'))) {

			$user = Auth::user();

			if (($request->etat !== 'VALIDE') && (!$request->observation)) {
				return response()->json(['success' => false, 'message' => "Vous devez joindre une observation à ce courrier."]);
			}

			$description = 'Validation du courrier';
			$statut = 'OUVERT';
			$etape_actuelle = $user->role->grade + 1;
			$message = "Courrier validé et transféré avec succès au niveau supérieur.";

			if ($request->etat === 'REJETE') {
				$description = 'Rejet du courrier';
				$statut = 'FERME';
				$etape_actuelle = $user->role->grade;
				$message = "Courrier rejeté. Vous pourrez le retrouver dans les archives à tout moment.";
			} else if ($request->etat == 'RENVOYE') {
				$description = 'Renvoi du courrier';
				$statut = 'FERME';
				$etape_actuelle = $user->role->grade - 1;
				$message = "Courrier renvoyé au bureau d'ordre.";
			} else if ($request->etat === 'RETOURNE') {
				$description = 'Renvoi du courrier';
				$statut = 'FERME';
				$etape_actuelle = $user->role->grade;
				$message = "Courrier retourné au bureau d'ordre.";
			}

			DB::beginTransaction();
			try {
				$result = Courrier::where([
					['id', '=', $request->courrier_id],
					['etat', '=', $request->etat === 'RETOURNE' ? 'VALIDE':'ATTENTE'],
					['statut', '=', 'OUVERT'],
					['etape_actuelle', '=', $user->role->grade]
				])->update([
					'etat' => $request->etat,
					'statut' => $statut,
					'observation' => $request->observation ? $request->observation : '',
					'etape_actuelle' => $etape_actuelle
				]);
				if ($result == 1) {
					$prochain = null;
					if ($request->etat === 'VALIDE') {
						$prochain = Role::where('grade', $user->role->grade + 1)->first();
					}
					Operation::create([
						'type' => 'ValidateOrReject',
						'donnees' => $request->etat === 'VALIDE' ? $prochain->description : $request->observation,
						'description' => $description,
						'user_id' => $user->id,
						'courrier_id' => $request->courrier_id
					]);
					DB::commit();
					return response()->json(['success' => true, 'message' => $message]);
				}
				return response()->json([
					'success' => false,
					'message' => "Ce courrier a déjà été traité."
				]);
			} catch (Exception $e) {
				DB::rollBack();
				return response()->json(['success' => false, 'message' => "Erreur interne, veuillez réessayer."]);
			}
		} else {
			return response()->json([
				'success' => false,
				'message' => "Droits insuffisants pour effectuer cette opération."
			]);
		}
	}




	public function terminateIncoming(Request $request)
	{
		$request->validate([
			'courrier_id' => ['required']
		]);

		if (Gate::allows('Terminate')) {

			$user = Auth::user();

			DB::beginTransaction();
			try {
				Courrier::find($request->courrier_id)->update([
					'statut' => 'FERME',
				]);
				Operation::create([
					'type' => 'Terminate',
					'donnees' => '',
					'description' => "Courrier arrivé à destination",
					'user_id' => $user->id,
					'courrier_id' => $request->courrier_id
				]);
				DB::commit();
				return response()->json(['success' => true]);
			} catch (Exception $e) {
				DB::rollBack();
				return response()->json(['success' => false, 'message' => "Erreur interne, veuillez réessayer."]);
			}
		} else {
			return response()->json([
				'success' => false,
				'message' => "Vous n'avez pas les droits nécéssaires pour effectuer cette opération."
			]);
		}
	}




	public function forwardIncoming(Request $request)
	{
		$request->validate([
			'courrier_id' => ['required']
		]);

		if (Gate::allows('ForwardTo')) {

			$user = Auth::user();

			DB::beginTransaction();
			try {
				$result = Courrier::where([
					['id', '=', $request->courrier_id],
					['etat', '=', 'VALIDE'],
					['etape_actuelle', '=', $user->role->grade],
					['statut', '=', 'OUVERT'],
				])->update([
					'etape_actuelle' => ($user->role->grade + 1)
				]);
				// echo json_encode([$result, $request->courrier_id, $user->role->grade]);
				if ($result == 1) {
					if ($request->annotation) {
						Operation::create([
							'type' => 'Annotate',
							'donnees' => $request->annotation,
							'description' => "Annotation du courrier",
							'user_id' => $user->id,
							'courrier_id' => $request->courrier_id
						]);
					}
					$prochain = Role::where('grade', $user->role->grade + 1)->first();
					Operation::create([
						'type' => 'ForwardTo',
						'donnees' => $prochain->description,
						'description' => "Transmission du courrier au niveau supérieur",
						'user_id' => $user->id,
						'courrier_id' => $request->courrier_id
					]);
					DB::commit();
					return response()->json(['success' => true, 'message' => "Courrier validé et transféré au niveau supérieur."]);
				}
				return response()->json([
					'success' => false,
					'message' => "Ce courrier a déjà été traité."
				]);
			} catch (Exception $e) {
				DB::rollBack();
				return response()->json(['success' => false, 'message' => "Erreur interne, veuillez réessayer."]);
			}
		}
	}


	public function imputeTo(Request $request)
	{
		$request->validate([
			'courrier_id' => ['required'],
			'directions' => ['required']
		]);

		if (Gate::allows('ImputeTo') && (mb_strlen($request->directions) > 0)) {

			$user = Auth::user();

			DB::beginTransaction();
			try {
				$result = Courrier::find($request->courrier_id)->update([
					'etat' => 'IMPUTE'
				]);
				if ($result == 1) {
					if ($request->annotation) {
						Operation::create([
							'type' => 'Annotate',
							'donnees' => $request->annotation,
							'description' => "Annotation du courrier",
							'user_id' => $user->id,
							'courrier_id' => $request->courrier_id
						]);
					}
					Operation::create([
						'type' => 'ImputeTo',
						'donnees' => $request->directions,
						'description' => "Imputation du courrier aux directions",
						'user_id' => $user->id,
						'courrier_id' => $request->courrier_id
					]);
					DB::commit();
					return response()->json(['success' => true, 'message' => "Courrier imputé aux cellules sélectionnées."]);
				}
				return response()->json([
					'success' => false,
					'message' => "Ce courrier a déjà été traité."
				]);
			} catch (Exception $e) {
				DB::rollBack();
				return response()->json(['success' => false, 'message' => "Erreur interne, veuillez réessayer."]);
			}
		}
	}


	public function returnTo(Request $request)
	{
		if (Gate::allows('ReturnTo')) {
		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		//
	}


	public function sendDirectionsList()
	{
		return response()->json(Direction::all());
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */

	//methode permettant de connaitre le nombre de courriers entrants traités par un utilisateur
	public function statCourrierEntrants()
	{
		$user = Auth::user();
		$userRole = Role::find($user->role_id);

		if ($userRole->role_id == 1  | $user->role_id == 2) {
			return response()->json(Courrier::where('etat', '>=', 1)->count());
		}
		return  response()->json(Courrier::where('etape_actuelle', '>', $userRole->grade)->count());
	}
}
