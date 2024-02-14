import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-usersuccess',
  templateUrl: './usersuccess.component.html',
  styleUrls: ['./usersuccess.component.scss']
})
export class UsersuccessComponent {

//   data: any;
//   journey="hotelDetails"
//   Headings=["OwnerName","Mobile", "HotelName", "hotelcontact","Book Now"]
//   showdata: boolean=false;
//   constructor(private apicallService:ApicallService , private router:Router){}

//   viewhotels(){
//     this.showdata=true;
//     this.apicallService.getApiCall('hotelDetails').subscribe(data=>{
//       this.data=data;
//     })
//   }
//   bookNow() { 
//     this.router.navigateByUrl("/user/bookhotel")
//  }

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
bookNow() { 
      this.router.navigateByUrl("/user/bookhotel")
    }
}






