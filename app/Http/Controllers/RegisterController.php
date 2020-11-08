<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function Resgister(Request $request)
    {

        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'id_role' => ['required'],
            'password' => ['required'],
        ]);
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'id_role' => $request->id_role,
            'password' => Hash::make($request->password)

        ]);
    }
}
