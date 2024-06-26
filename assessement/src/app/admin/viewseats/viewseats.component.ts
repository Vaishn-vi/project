import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-viewseats',
  templateUrl: './viewseats.component.html',
  styleUrls: ['./viewseats.component.scss']
})
export class ViewseatsComponent {
  userData:any;
  userName:any;
  tickesByUser:any
  showData: boolean = false; 
  journey :any;
  Searchtext:any;
  tableHeading = ["Name","Contact","no of tickets","address"];
  constructor(private apicallService: ApicallService,private router: Router){
  }
  
  ngOnInit(){
  this.journey = "userDetails"
  this.userName = this.apicallService.userName;
  this.getuserDetails();
  }
  
  async getuserDetails(){
  this.userData =   await this.apicallService.getApiCall('userDetails').toPromise()
  }
  
  viewtickets(){
    this.tickesByUser = []
      if(this.userData ){
        this.userData.forEach((item:any)=>{
          if(item.ownerName == this.userName){
            this.tickesByUser.push(item)
          }
        })
      }
      if( this.tickesByUser.length > 0){
        this.showData = true
   
      }
      console.log('this.ticketsByUser',this.tickesByUser);
      
  }
  reg(){
    this.apicallService.dataById = null;
  }
   async delete(id:any){
   await this.apicallService.deletedata('userDetails',id).toPromise();
   this. getuserDetails();
   this.viewtickets();
  
  }
  
  }
  
  
  
  
