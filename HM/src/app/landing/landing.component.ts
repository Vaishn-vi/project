import { Component } from '@angular/core';
import { ApicallService } from '../shared/apicall.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent{
  constructor(private apicallservice:ApicallService){}

  journey(journey:string){
   this.apicallservice.journey=journey;
  }



}
