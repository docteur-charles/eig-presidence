<?php

namespace App\Providers;

use App\Models\Direction;
use App\Models\Operation;
use App\Models\Team;
use App\Policies\TeamPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
	/**
	 * The policy mappings for the application.
	 *
	 * @var array
	 */
	protected $policies = [
		Team::class => TeamPolicy::class,
	];

	/**
	 * Register any authentication / authorization services.
	 *
	 * @return void
	 */
	public function boot()
	{

		$this->registerPolicies();

		// Droit sur la gestion des utilisateurs.
		Gate::define('ManageUsers', function ($user) {
			return $user->hasOneOf(['TOUT_ADMIN', 'TOUT_ROOT']);
		});


		// Enregistrement d'un courrier.
		Gate::define('Register', function ($user, $courrier) {
			if ($courrier->type_contenu === 'LETTRE_DU_PRESIDENT') {
				return $user->hasPrivilege('ENREGIST_LETTRE_PRESIDENT');
			} else if (in_array($courrier->type_contenu, ['LETTRE_ORDINAIRE', 'ARRETE', 'BORDEREAU_DENVOI', 'DECISION'])) {
				if ($courrier->mention === 'CONFIDENTIEL') {
					return $user->hasPrivilege('ENREGIST_COURRIER_CONFIDENT');
				}
				return $user->hasPrivilege('ENREGIST_COURRIER_ORDINAIRE');
			}
			return false;
		});


		// Envoyer un courrier au Bureau d'Ordre ou à la Directrice des Courriers.
		Gate::define('SendOnCircuit', function ($user, $courrier) {
			return ($courrier->typeCourrier === 'INTERNE') && $user->hasPrivilege('ENVOI_COURRIER');
		});


		// Envoyer un courrier à un directeur.
		Gate::define('SendToOthers', function ($user, $courrier) {
			return ($courrier->typeCourrier === 'INTERNE') && $user->hasPrivilege('ENVOI_COURRIER_A_UN_DIRECTEUR');
		});


		// Valider ou rejeter un courrier.
		Gate::define('ValidateOrReject', function ($user) {
			return $user->hasPrivilege('VALIDAT_REJET_COURRIER');
		});


		// Retourner un courrier à l'enregistreur.
		Gate::define('ReturnTo', function ($user) {
			return $user->hasPrivilege('RENVOI_COURRIER');
		});


		// Valider au niveau supérieur.
		Gate::define('ForwardTo', function ($user) {
			return $user->hasPrivilege('VALIDAT_NIVEAU_SUP');
		});


		// Imputation d'un courrier.
		Gate::define('ImputeTo', function ($user) {
			return $user->hasPrivilege('IMPUTAT_COURRIER');
		});


		// Annotation d'un courrier.
		Gate::define('Annotate', function ($user) {
			return $user->hasPrivilege('ANNOT_COURRIER');
		});


		// Arreter le traitement d'un courrier.
		Gate::define('Terminate', function ($user) {
			return $user->hasPrivilege('ARRET_TRAIT_COURRIER');
		});


		// Suivre l'état de traitement des courriers confidentiels.
		Gate::define('TrackConfidential', function ($user) {
			return $user->hasPrivilege('SUIVRE_COURRIER_CONFIDENT');
		});


		// Suivre l'état de traitement des.
		Gate::define('TrackOrdinary', function ($user) {
			return $user->hasPrivilege('SUIVRE_COURRIER_ORDINAIRE');
		});


		//  Consulter des statistiques liées à un courrier.
		Gate::define('ConsultStat', function ($user, $courrier) {

			// Si le courrier est interne et on en est propriétaire.
			if (($courrier->typeCourrier === 'INTERNE') && (($courrier->destinateur_id == $user->id) || ($courrier->destinataire_id == $user->id))) {
				return $user->hasPrivilege('CONSULT_STAT_PERSO');
			}

			// Si confidentiel ou lettre du président (directrice des courriers).
			if (($courrier->mention === 'CONFIDENTIEL') || ($courrier->typeContenu === 'LETTRE_DU_PRESIDENT')) {
				return $user->hasPrivilege('CONSUTL_STAT_CONFIDENT');
			} else { // Si c'est le bureau d'autre.
				return $user->hasPrivilege('CONSUTL_STAT_ORDINAIRE');
			}
		});


		//  Consulter des statistiques liées à un courrier.
		Gate::define('Consult', function ($user, $courrier) {

			// Si le courrier est interne et on en est propriétaire.
			// if (($courrier->type_courrier === 'INTERNE') && (($courrier->destinateur_id == $user->id) || ($courrier->destinataire_id == $user->id))) {
			// 	return $user->hasPrivilege('CONSULT_COURRIER_RECU');
			// }

			if ($courrier->etat === 'IMPUTE') {
				$operation = Operation::where([
					['courrier_id', '=', $courrier->id],
					['type', '=', 'ImputeTo']
				])->first();
				if ($operation) {
					$direction = Direction::whereIn('id', explode('$', $operation->donnees))->where('directeur_id', $user->id)->get();
					return !$direction->isEmpty() && $user->hasPrivilege('CONSULT_COURRIER_DIRECTION');
				}
			}

			// Si confidentiel ou lettre du président (directrice des courriers).
			if (($courrier->mention === 'CONFIDENTIEL') || ($courrier->type_contenu === 'LETTRE_DU_PRESIDENT')) {
				return $user->hasPrivilege('CONSULT_RECEIV_CONFIDENT');
			} else { // Si c'est le bureau d'autre.
				return $user->hasPrivilege('COURRIER_CIRCUIT');
			}
		});


		//  Consulter les archives personnelles (directeur).
		Gate::define('ConsultPersonalArchiv', function ($user) {
			return $user->hasPrivilege('CONSULT_ARCHIVE_PERSO');
		});


		//  Consulter les archives confidentielles (responsables et directrice des courriers).
		Gate::define('ConsultConfidentialArchiv', function ($user) {
			return $user->hasPrivilege('CONSULT_ARCH_CONFIDENT');
		});


		//  Consulter les archives ordinaires (responsables et directrice des courriers).
		Gate::define('ConsultArchiv', function ($user) {
			return $user->hasPrivilege('CONSULT_ARCH_ORDINAIRE');
		});


		// Consulter les fichiers reçus des autres directeurs.
		Gate::define('ConsultReceived', function ($user) {
			return $user->hasOneOf(['CONSULT_COURRIER_RECU','COURRIER_CIRCUIT']);
		});


		// Consulter les fichiers confidentiels reçus des autres directeurs.
		Gate::define('ConsultConfidential', function ($user) {
			return $user->hasPrivilege('CONSULT_RECEIV_CONFIDENT');
		});


		// Consulter les fichiers imputés à sa direction.
		Gate::define('ConsultImputed', function ($user) {
			return $user->hasPrivilege('CONSULT_COURRIER_DIRECTION');
		});
	}
}
