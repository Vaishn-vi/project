import { Component } from '@angular/core';
import { ApicallService } from './shared/apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HM';
  data: any;

  Headings=["OwnerName","Mobile", "HotelName","Ac", "NonAc","Ac_NonAc","Veg", "NonVeg","Veg_NonVeg", "hotelcontact","Delete"]
  constructor(private apicallService:ApicallService){}

  viewhotels(){
    this.apicallService.getApiCall('hotelDetails').subscribe(data=>{
      this.data=data;
    })
  }
}
