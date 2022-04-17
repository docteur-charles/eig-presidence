<?php

namespace App\Http\Controllers;

use App\Models\Courrier;
use App\Models\Direction;
use App\Models\Operation;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();
            $user = clone Auth::user();
            $user->role = Auth::user()->role;
            unset(
                $user->role_id,
                $user->created_at,
                $user->email_verified_at,
                $user->updated_at,
                $user->role->created_at,
                $user->role->updated_at
            );
            return response()->json([
                'success' => true,
                'data' => [
                    'user' => $user,
                    'roles' => Role::all(),
                    'stats' => [

                        'internes' => Courrier::where([
                            ['etape_actuelle', '=', $user->role->grade],
                            ['type_courrier', '=', 'INTERNE'],
                            ['statut', '=', 'OUVERT']
                        ])->count(),


                        'entrants' => Courrier::where([
                            ['statut', '=', 'OUVERT'],
                            ['type_courrier', '=', 'ENTRANT'],
                            ['etape_actuelle', '=', $user->role->grade]
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
                    ]
                ]
            ]);
        } else {
            return  response()->json(['success' => false, 'message' => "Adresse e-mail ou mot de passe invalide."]);
        }
    }


    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['success' => true]);
    }


    public function checkSession()
    {
        if (Auth::check()) {
            return response()->json(['isValid' => true]);
        }
        return response()->json(['isValid' => false]);
    }


    public function sendToken()
    {
        return response()->json(csrf_token());
    }
}
