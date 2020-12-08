<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);
        if (Auth::attempt($request->only('email', 'password'))) {
            $user = clone Auth::user();
            $user->role = Auth::user()->role;
            unset(
                $user->role_id,
                $user->created_at,
                $user->email_verified_at,
                $user->updated_at,
                $user->role->created_at,
                $user->role->email_verified_at,
                $user->role->updated_at,
            );
            return response()->json($user, 200);
        } else {
            return  response()->json(['error' => "Adresse e-mail ou mot de passe invalide."], 406);
        }
    }
    public function logout()
    {
		Auth::logout();
		return response()->json('success', 200);
    }
    public function checkSession() {
        if (Auth::check()) {
            return true;
        }
        return false;
    }
}
