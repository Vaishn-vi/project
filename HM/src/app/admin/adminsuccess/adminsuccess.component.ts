import { Component } from '@angular/core';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-adminsuccess',
  templateUrl: './adminsuccess.component.html',
  styleUrls: ['./adminsuccess.component.scss']
})
export class AdminsuccessComponent {
  data: any;
  Headings=["OwnerName","Mobile", "HotelName","Ac", "NonAc","Ac_NonAc","Veg", "NonVeg","Veg_NonVeg", "hotelcontact","Delete"]
  showdata: boolean=false;
  constructor(private apicallService:ApicallService){}

  viewhotels(){
    this.showdata=true;
    this.apicallService.getApiCall('hotelDetails').subscribe(data=>{
      this.data=data;
    })

  }
  async delete(id:any){
    await this.apicallService.deletedata('hotelDetails',id).toPromise();

    this.viewhotels();
 
  }
}
