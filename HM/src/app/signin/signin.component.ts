import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../shared/apicall.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent{
  signInForm! : FormGroup;
  journey :any;
  data:any;
  validUser:any;
  showPassword=false;
  notValidUser: boolean =false;
  constructor(private formBuilder:FormBuilder, 
   private apicallService: ApicallService, private router: Router){

  }
 ngOnInit(){
 this.journey = this.apicallService.journey; //user/owner/admin
//  this.journey = 'owner';
 this.getData()
   this.formDetails()
 }
 showPass(){
  this.showPassword =  !this.showPassword;
}

   formDetails(){
     this.signInForm = this.formBuilder.group({
       userName:['',[Validators.required]],
       password:['',[Validators.required]]
     })
   }

   submit(){
  //  this.validUser =[]
     let isValidUser = false;
     this.data.find((ele:any)=>{
       if(this.signInForm.value.userName  == ele.fullName && this.signInForm.value.password == ele.password){
         //this.validUser.push(ele);
         isValidUser = true;
       }
     })
     if(isValidUser){
       this.apicallService.userName = this.signInForm.value.userName;
        if(this.journey =='admin'){
         this.router.navigateByUrl('/admin/adminsuccess')
        }
        else if(this.journey == 'user'){
         this.router.navigateByUrl('/user/usersuccess') 
        }
        else{
         this.router.navigateByUrl('/owner/ownersuccess')
        }
     }else{
      this.notValidUser = true;
     }
   }
   getData(){  //get api call u/a/o
     this.apicallService.getApiCall(this.journey).subscribe(respo=>{
       this.data = respo;
       console.log('this.data ',this.data );
     })  
   }
}
