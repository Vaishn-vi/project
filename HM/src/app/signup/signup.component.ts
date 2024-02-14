
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../shared/apicall.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
 
  signUpForm! : FormGroup;
  name1!: string;
  isMatch :boolean = false;
  showPassword=false;
  showConfirmPassword=false;
  endPoint :any;
  data: any;
  constructor( private formBuilder: FormBuilder,
     public apicallService:ApicallService,private router:Router){}

  ngOnInit(){
 
   this.endPoint =  this.apicallService.journey; //admin/owner/user 
 
   this.formDetails();

  }

  formDetails(){
    this.signUpForm = this.formBuilder.group({
      fullName:['',[Validators.required]],
      mob:[null,[Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      gender:[],
      pan:[null,[ Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]$")]],
      password:[],
      confirmPass:['']
    })
}

matchPassword(){
  if(this.signUpForm.value.confirmPass != ''){
    if(this.signUpForm.value.password == this.signUpForm.value.confirmPass){
      this.isMatch = false;
    }else{
      this.isMatch = true;
    }
  }
 
}
showPass(){
  this.showPassword =  !this.showPassword;
}
showConfirmPass(){
  this.showConfirmPassword =  !this.showConfirmPassword;
}

submit(){
this.apicallService.postApiCall(this.endPoint, this.signUpForm.value).subscribe(respo=>{
    this.data=respo;
    
  if(this.endPoint ==='admin'){
     this.router.navigateByUrl('signin')
  }else if(this.endPoint === 'owner'){
    this.router.navigateByUrl('signin')
  }
  else{
    this.router.navigateByUrl('signin')
  }
})

}
}

