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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/dogs', 'DogController@index');
Route::get('/dogs/{id}', 'DogController@show');
Route::post('/dogs', 'DogController@store');
Route::post('/dogs/{id}/characteristics', 'DogController@characteristics');
Route::delete('/dogs/{id}', 'DogController@delete');
Route::delete('/dogs/{id}/characteristics', 'DogController@resetcharacteristics');