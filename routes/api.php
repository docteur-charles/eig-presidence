<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Gestion des utilisateurs 
Route::namespace('App\Http\Controllers\Admin')->prefix('admin')->name('admin.')->middleware('can:manage-users')->group(function () {
    Route::get('/users', [UserController::class, 'index']); 
    Route::post('/register', [UserController::class, 'store']); 
});

//enregistrement des courriers Entrants
Route::post('/EngCourrierEntrant', [App\Http\Controllers\CourrierController::class, 'Store'])->middleware('can:ENREGIST_COURRIER_CONFIDENT,ENREGIST_COURRIER_ORDINAIRE');
//enregistrement des courriers Interne
Route::post('/sendToOthers', [App\Http\Controllers\CourrierInterneController::class, 'Store'])->middleware('can:ENREGIST_COURRIER_CONFIDENT,ENREGIST_COURRIER_ORDINAIRE');

//la liste des courriers pour Validation
Route::get('/ListCourrierValidation', [App\Http\Controllers\ValidationCourrierController::class, 'index'])->middleware('can:VALIDAT_REJET_COURRIER');

//validation du courrier 
Route::get('/validateOrReject', [App\Http\Controllers\ValidationCourrierController::class, 'update'])->middleware('can:VALIDAT_REJET_COURRIER');
 

Route::post('/login', [App\Http\Controllers\LoginController::class, 'login'])->name('login');
Route::post('/logout', [App\Http\Controllers\LoginController::class, 'logout'])->name('logout');

//verifier si la session de l'utilisateur est active
Route::get('/confirmSession', [App\Http\Controllers\LoginController::class, 'checkSession'])->name('confirmSession');
