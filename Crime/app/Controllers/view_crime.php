<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\crime;


class view_crime extends BaseController
{
    
    
   public function  view_crime()
   {
   $model=new crime();
   //dd($model->findAll());
   $data['detail']=$model->findAll();
   return view('pages/view_crime',$data);
   return view('pages/view_crime');
}
}