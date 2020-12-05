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

//enregistrement des courriers 
Route::post('/EngCourrier', [App\Http\Controllers\CourrierController::class, 'Store'])->middleware('can:ENREGIST_COURRIER_CONFIDENT,ENREGIST_COURRIER_ORDINAIRE');

//Validation des courriers 
Route::get('/ListCourrier', [App\Http\Controllers\CourrierController::class, 'index'])->middleware('can:VALIDAT_REJET_COURRIER');
 

Route::post('/login', [App\Http\Controllers\LoginController::class, 'login'])->name('login');
Route::get('/logout', [App\Http\Controllers\LoginController::class, 'logout'])->name('logout');
