import { Component } from '@angular/core';
import { ApicallService } from '../shared/apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  styleUrls: ['./hotellist.component.scss']
})
export class HotellistComponent {
  hotelData:any;
  userName:any;
  hotelsByOwner:any
  showData: boolean = false; 
  journey :any;
  constructor(private apicallService: ApicallService,private router: Router){
  }
  
  ngOnInit(){
  this.journey = "hotelDetails"
  this.userName = this.apicallService.userName;
  this.getHotelDetails();
  }
  
  async getHotelDetails(){
  this.hotelData =   await this.apicallService.getApiCall('hotelDetails').toPromise()
  }
  
  viewHotel(){
    this.hotelsByOwner = []
      if(this.hotelData ){
        this.hotelData.forEach((item:any)=>{
          if(item.ownerName == this.userName){
            this.hotelsByOwner.push(item)
          }
        })
      }
      if( this.hotelsByOwner.length > 0){
        this.showData = true
   
      }
      console.log('this.hotelsByOwner',this.hotelsByOwner);
      
  }
}
