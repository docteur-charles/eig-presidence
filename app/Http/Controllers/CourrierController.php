<?php

namespace App\Http\Controllers;

use App\Models\Courrier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class CourrierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Gate::allows('VALIDAT_REJET_COURRIER')) {
            
            return  response()->json(Courrier::all());
        }
        
        return response()->json(['error'=>"accés non autorisé"]);

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
        if($request->type_courrier === 'CONFIDENTIEL') {
            if(Gate::denies('ENREGIST_COURRIER_CONFIDENT')) {
                return response()->json(['error'=>"Action non autorisée"]);
            }
        }
        $request->validate([
            'objet'=> ['required'],
            'origine' => ['required'],
            'type_contenu' => ['required'],
            'type_courrier'=> ['required'],
            'reference' => ['required','unique:courriers'],
            'mention'=> ['required'],
            'etat' => ['required'],
            'url_fichier' => ['required'],
        ]);
        Courrier::create([
            'objet' => $request->objet,
            'origine' => $request->origine,
            'type_contenu' =>$request->type_contenu,
            'type_courrier' =>$request->type_courrier,
            'reference'=>$request->reference,
            'mention' =>$request->mention,
            'etat'=>$request->etat,
            'url_fichier' => $request->url_fichier
        ]);
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    //methode permettant de connaitre le nombre de courriers entrants traités par un utilisateur
    public function statCourrierEntrants() {
            $user = Auth::user();
            $userRole = Role::find($user->role_id);

            if( $userRole->role_id == 1  | $user->role_id == 2) {
                return response()->json(Courrier::where('etat','>=', 1)->count());
            }
            return  response()->json(Courrier::where('etape_actuelle','>', $userRole->grade)->count());
    }
}
