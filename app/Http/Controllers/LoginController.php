<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request) {
       $request->validate([
            'email'=> ['required'],
            'password' => ['required']
        ]);
            $user= User::where('email', $request->email)->first();
        
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    'message' => ['email ou mot de passe invalide']
                ], 404);
            }
        
             $token = $user->createToken('gecprn-token')->plainTextToken;

        
            $response = [
                'user' => $user,
                'token' => $token
            ];
        
             return response()->json($response, 201);
    }
    public function logout (Request $request) {
        $request->user()->tokens()->delete();
        return response()->json('logout', 201);
    }
}
