import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-hotelregister',
  templateUrl: './hotelregister.component.html',
  styleUrls: ['./hotelregister.component.scss']
})
export class HotelregisterComponent {
  hotelregister! : FormGroup;
  name1!: string;
  isMatch :boolean = false;
  showPassword=false;
  journey :any;
  data: any;

  constructor( private formBuilder: FormBuilder,
     public apicallService:ApicallService,private router:Router){}

  ngOnInit(){
   this.journey =  this.apicallService.journey;
   this.formDetails();
  }

  formDetails(){
    this.hotelregister = this.formBuilder.group({
      ownerName:['',[Validators.required]],
      mob:[null,[Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
      hotelName:['',[Validators.required]],
      hotelcontact:[null,[Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
      password:[],
     
    })

  }
showPass(){
  this.showPassword =  !this.showPassword;
}


submit(){
this.apicallService.postApiCall(this.journey, this.hotelregister.value).subscribe(respo=>{
    this.data=respo;
    if(this.journey =='admin'){
      this.router.navigateByUrl('/owner/ownersuccess')
     }
    
})


  }
}





