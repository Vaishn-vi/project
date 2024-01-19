<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\fir;


class Register_Fir extends BaseController
{
    public function Register_Fir()
    {
        return view('pages/Register_Fir');

    }

    public function addfir()
    {  $data=['id' =>$this->request->getvar('id'),
    'username' =>$this->request->getvar('username'),
    'location' =>$this->request->getvar('location'),
    'date' =>$this->request->getvar('date'),
    'time' =>$this->request->getvar('time'),
    'crime' =>$this->request->getvar('crime'),
    ];
    $model=new fir();
    $model->insert($data);
    echo "<h1> Data send succesfully in the form</h1>";
    }
   public function  view_fir()
   {
   $model=new fir();
   //dd($model->findAll());
   $data['detail']=$model->findAll();
   return view('pages/view_fir',$data);
   return view('pages/view_fir');
}
}