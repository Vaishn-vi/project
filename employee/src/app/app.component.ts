import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginForm! : FormGroup;
  dataById: any;
  Data:any=[];

  constructor(private formBuilder: FormBuilder,private service:ServiceService,private router:Router){}
  ngOnInit(){
    this.dataById = this.service.dataById
    this.formDetails();
    this.getMethod();
   }
 
   formDetails() {
    this.loginForm = this.formBuilder.group({
      Name: [this.dataById ? this.dataById?.Name : '', [Validators.required],],
      Salary: [this.dataById ? this.dataById?.Salary : '', [Validators.required],],
      Age: [this.dataById ? this.dataById?.Age : '', [Validators.required],]
     })
}
// submit() {
//   this.service.postApiCall(this.loginForm.value).subscribe(respo => {
//     this.router.navigateByUrl('/employee')
//   })

// }

async getMethod(){
  this.Data =   await this.service.getApiCall().toPromise()
  console.log(this.Data)
}
set(obj: any) { 
  this.Data = obj 
} 
}


