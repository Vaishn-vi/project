import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-adminsuccess',
  templateUrl: './adminsuccess.component.html',
  styleUrls: ['./adminsuccess.component.scss']
})
export class AdminsuccessComponent {
hotelData:any;
userName:any;
hotelsByOwner:any
showData: boolean = false; 
journey :any;
Searchtext:any;
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
reg(){
  this.apicallService.dataById = null;
}
 async delete(id:any){
 await this.apicallService.deletedata('hotelDetails',id).toPromise();
 this. getHotelDetails();
 this.viewHotel();

}

}


