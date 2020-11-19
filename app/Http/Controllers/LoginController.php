<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request) {
       $request->validate([
            'email'=> ['required'],
            'password' => ['required']
        ]);
        if(Auth::attempt($request->only('email', 'password'))) {
            return response()->json(Auth::user(),200);
        } else {
            return  response()->json(['error'=>"login ou mot de passe invalides"],406);
        }
    }
    public function logout() {
        Auth::logout();
    }
}