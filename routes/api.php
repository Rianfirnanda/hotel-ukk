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

Route::group(['prefix' => 'v1'], function() {
    Route::post('auth/login', 'AuthController@login');
});

Route::group(['prefix' => 'v1'], function() {
    Route::get('public/kamar', 'KamarController@index');

    Route::group(['middleware' => 'auth:api'], function() {
        Route::resource('admin', 'AdminController');
        Route::resource('kamar', 'KamarController');
        Route::resource('fasilitas-kamar', 'FasilitasKamarController');
        Route::resource('fasilitas-hotel', 'FasilitasHotelController');
        Route::resource('pemesanan', 'PemesananController');

        Route::get('kamar/fasilitas/{id}', 'KamarController@fasilitas');
    });
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
