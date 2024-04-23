import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';
@Component({
  selector: 'app-bookhotel',
  templateUrl: './bookhotel.component.html',
  styleUrls: ['./bookhotel.component.scss']
})
export class BookhotelComponent {
  bookhotel!:FormGroup;
  hotelEndPoint = 'hotelBooking';
  dataById :any;
  journey="hotelBooking";
  constructor(private formBuilder: FormBuilder,private apicallService: ApicallService,
    private router: Router){}
  ngOnInit(){
    this.dataById = this.apicallService.dataById
    this.hotelDetailsForm()
  }
  hotelDetailsForm(){
    this.bookhotel = this.formBuilder.group({
      Name:['',[Validators.required]],
      mob:[null,[Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      noOfRooms:['',[Validators.minLength(1)]],
      date:[],
      days:['',[Validators.minLength(1)]],
      imageField:[]
    })
  }
  submit(){
    this.apicallService.postApiCall(this.hotelEndPoint,this.bookhotel.value).subscribe(respo=>{
      alert("Hotel Booked Successfully");
       this.router.navigateByUrl('/user/usersuccess')
    }) 
  }
  async update(){
  let respo =  await this.apicallService.updateData('hotelBooking',this.dataById?.id,this.bookhotel.value).toPromise()
  this.router.navigateByUrl('/user/usersuccess');
}
  openInput(){ 
    document?.getElementById("fileInput")?.click();
}
fileChange(file:any){
   let imgName = "assets/Images/"+ file.target.value.slice(12)
   this.bookhotel.patchValue({imageField:imgName})
}
}