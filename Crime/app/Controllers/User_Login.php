<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\user1;


class User_Login extends BaseController
{
    public function User_Login()
    {
        return view('pages/User_Login');

    }

    public function adduser()
    {
    $data=['userid' =>$this->request->getvar('userid'),
    'name' =>$this->request->getvar('name'),
    'mobile_no' =>$this->request->getvar('mobile_no'),
    'emailaddress' =>$this->request->getvar('emailaddress'),
    'address' =>$this->request->getvar('address'),
    'password' =>$this->request->getvar('password'),
    ];
    $model=new user1();
    $model->insert($data);
    echo "<h1> Data send succesfully in the form</h1>";
    }
   public function  view_user()
   {
   $model=new user1();
   //dd($model->findAll());
   $data['detail']=$model->findAll();
   return view('pages/view_user',$data);
   return view('pages/view_user');
}
}