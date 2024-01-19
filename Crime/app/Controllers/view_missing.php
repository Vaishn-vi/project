<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\missingperson;


class view_missing extends BaseController
{
    
    
   public function  view_missing()
   {
   $model=new missingperson();
   //dd($model->findAll());
   $data['detail']=$model->findAll();
   return view('pages/view_missing',$data);
   return view('pages/view_missing');
}
}