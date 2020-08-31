<?php

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/{vue_capture?}',function(){
    return view('welcome');

})->where('vue_capture','[\/\w\.-]*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/verify', 'Auth\RegisterController@verifyUser')->name('verfy.user');
Route::prefix('admin')->group(base_path('routes/admin.php'));
