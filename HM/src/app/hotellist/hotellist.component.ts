import { Component } from '@angular/core';
import { ApicallService } from '../shared/apicall.service';

@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  styleUrls: ['./hotellist.component.scss']
})
export class HotellistComponent {
  data: any;
  journey="hotelDetails"
  Headings=["HotelName","Ac", "NonAc","Ac_NonAc","Veg", "NonVeg", "hotelcontact"]
  showdata: boolean=false;

  constructor(private apicallService:ApicallService){}

  viewhotels(){
    this.showdata=!this.showdata
    this.apicallService.getApiCall('hotelDetails').subscribe(data=>{
      this.data=data;
    })
  }
}
