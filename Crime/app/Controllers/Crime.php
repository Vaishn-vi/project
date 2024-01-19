<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\crime;


class view_crime extends BaseController
{
    public function addcrime()
    {
    $data=['userid' =>$this->request->getvar('userid'),
    'username' =>$this->request->getvar('username'),
    'location' =>$this->request->getvar('location'),
    'date' =>$this->request->getvar('date'),
    'time '=>$this->request->getvar('time'),
    'crime' =>$this->request->getvar('crime_type'),
    'crime_desc' =>$this->request->getvar('crime_desc'),
    ];
    $model=new crime();
    $model->insert($data);
    echo "<h1> Data send succesfully in the form</h1>";
    }
   public function  view_crime()
   {
   $model=new crime();
   //dd($model->findAll());
   $data['detail']=$model->findAll();
   return view('pages/view_crime',$data);
   return view('pages/view_crime');
}
}