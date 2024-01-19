<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\Police;


class Police_Login extends BaseController
{
    public function Police_Login()
    {
        return view('pages/Police_Login');

    }

    public function addpolice()
    {
    $data=['name' =>$this->request->getvar('name'),
    'emailaddress' =>$this->request->getvar('emailaddress'),
    'password' =>$this->request->getvar('password'),
    ];
    $model=new Police();
    $model->insert($data);
    echo "<h1> Data send succesfully in the form</h1>";
    }
   public function  view_police()
   {
   $model=new Police();
   //dd($model->findAll());
   $data['detail']=$model->findAll();
   return view('pages/view_police',$data);
   return view('pages/view_police');
}
}