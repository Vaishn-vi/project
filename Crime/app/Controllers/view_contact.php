<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\contactus;


class view_contact extends BaseController
{
    
    
   public function  view_contact()
   {
   $model=new contactus();
   //dd($model->findAll());
   $data['detail']=$model->findAll();
   return view('pages/view_contact',$data);
   return view('pages/view_contact');
}
}