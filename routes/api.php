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
|Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/


Route::group([
     'middleware'=>'api',
     'prefix' => 'auth'

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('payload', 'AuthController@payload');
    Route::post('signup', 'AuthController@signup');

});
//Route::prefix('admin')->group(base_path('routes/admin.php'));

Route::group([
    'middleware'=>'api',
    'prefix' => 'admin'

], function () {
    Route::get('admin-login','Admin\LoginController@adminlogin')->name('admin.login.get');
    Route::post('admin-login','Admin\LoginController@login')->name('admin.login');

   Route::post('login', 'AuthController@login');
   Route::post('signup', 'AuthController@signup');
   Route::post('logout', 'AuthController@logout');
   Route::post('refresh', 'AuthController@refresh');
   Route::post('me', 'AuthController@me');
   Route::post('payload', 'AuthController@payload');
   Route::post('signup', 'AuthController@signup');

});

Route::apiResource('/employee','Api\EmployeeController');
Route::apiResource('/supplier','Api\SupplierController');
Route::apiResource('/category','Api\CategoryController');
Route::apiResource('/product','Api\ProductController');
Route::apiResource('/expense','Api\ExpenseController');

Route::post('/paidsalary/{id}','Api\SalaryController@paid');
Route::get('/salary','Api\SalaryController@allsalary');
Route::get('/salary/view/{id}','Api\SalaryController@viewsalary');
Route::get('/edit/salary/{id}','Api\SalaryController@editsalary');
Route::post('/update/salary/{id}','Api\SalaryController@salaryupdate');
