<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;
use App\Http\Controllers\AuthController;

class LoginController extends Controller  
{
    use AuthenticatesUsers;
   // use AuthController;
    
    protected $redirectTo = RouteServiceProvider::ADMIN_HOME;
 
    public function adminlogin()
    {
        return view('admin.auth.login');
    }
    protected function guard()
    {
        return Auth::guard('admin-api');
    }
}
