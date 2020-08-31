<?php
Route::get('admin-login','Admin\LoginController@adminlogin')->name('admin.login.get');
Route::post('admin-login','Admin\LoginController@login')->name('admin.login');

Route::get('dashboard',function()
{
    return "admin dashboard";
});