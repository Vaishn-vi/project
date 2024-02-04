import { Component } from '@angular/core';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-usersuccess',
  templateUrl: './usersuccess.component.html',
  styleUrls: ['./usersuccess.component.scss']
})
export class UsersuccessComponent {

  data: any;
  Headings=["OwnerName","Mobile", "HotelName","Ac", "NonAc","Ac_NonAc","Veg", "NonVeg","Veg_NonVeg", "hotelcontact","Book Now"]
  showdata: boolean=false;
  constructor(private apicallService:ApicallService){}

  viewhotels(){
    this.showdata=true;
    this.apicallService.getApiCall('hotelDetails').subscribe(data=>{
      this.data=data;
    })
   

  }
  bookNow() { 
}

}
