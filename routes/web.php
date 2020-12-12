<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::any('(.*)', function () {
//     return view('welcome');
// });


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	return $request->user();
});


//Gestion des utilisateurs 
Route::namespace('App\Http\Controllers\Admin')->prefix('admin')->name('admin.')->middleware('can:manage-users')->group(function () {
	Route::get('/users', [UserController::class, 'index']);
	Route::post('/register', [UserController::class, 'store']);
});


//enregistrement des courriers Entrants
Route::post('/registerIncoming', [App\Http\Controllers\CourrierController::class, 'store'])->middleware('web');


//enregistrement des courriers Interne
Route::post('/sendToOthers', [App\Http\Controllers\CourrierInterneController::class, 'store'])->middleware('can:ENREGIST_COURRIER_CONFIDENT,ENREGIST_COURRIER_ORDINAIRE');


// la liste des courriers pour Validation
Route::get('/consultExternalReceived', [App\Http\Controllers\CourrierController::class, 'consultReceived'])->middleware('auth');


Route::post('/consultExternalOne', [App\Http\Controllers\CourrierController::class, 'consultDetail'])->middleware('auth');


// validation du courrier.
Route::post('/validateOrReject', [App\Http\Controllers\CourrierController::class, 'validateIncoming'])->middleware('auth');


Route::post('/imputeTo', [App\Http\Controllers\CourrierController::class, 'imputeTo'])->middleware('auth');


Route::post('/transfertTo', [App\Http\Controllers\CourrierController::class, 'forwardIncoming'])->middleware('auth');


Route::post('/getOperations', [App\Http\Controllers\CourrierController::class, 'sendOperations'])->middleware('auth');


Route::post('/login', [App\Http\Controllers\LoginController::class, 'login'])->name('login');


Route::post('/logout', [App\Http\Controllers\LoginController::class, 'logout'])->name('logout');


// verifier si la session de l'utilisateur est active.
Route::get('/confirmSession', [App\Http\Controllers\LoginController::class, 'checkSession'])->name('confirmSession');


// Obtention du token.
Route::get('/getToken', [App\Http\Controllers\LoginController::class, 'sendToken'])->name('getToken');


Route::get('/getDirectionsList', [App\Http\Controllers\CourrierController::class, 'sendDirectionsList'])->middleware(('auth'));


Route::get('/getStats', [App\Http\Controllers\CourrierController::class, 'sendStats'])->middleware(('auth'));


Route::fallback(function () {
	return view('welcome');
});



//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
