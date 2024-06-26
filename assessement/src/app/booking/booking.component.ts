import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  bookticket!:FormGroup;
  EndPoint = 'userDetails';
  dataById :any;
  journey="userDetails";
  constructor(private formBuilder: FormBuilder,private apicallService: ApicallService,
    private router: Router){}
  ngOnInit(){
    this.dataById = this.apicallService.dataById
    this.userDetailsForm()
  }
  userDetailsForm(){
    this.bookticket = this.formBuilder.group({
      Name:['',[Validators.required]],
      contact:[null,[Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      noOfTickets:['',[Validators.minLength(1)]],
      address: [this.dataById ? this.dataById?.address : '', [Validators.required]],
      date:[],
    })
  }
  submit(){
    this.apicallService.postApiCall(this.EndPoint,this.bookticket.value).subscribe(respo=>{
      alert("ticket Booked Successfully");
       this.router.navigateByUrl('/movie')
    }) 
  }
  async update(){
  let respo =  await this.apicallService.updateData('userDetails',this.dataById?.id,this.bookticket.value).toPromise()
  this.router.navigateByUrl('/movie');
}

}
