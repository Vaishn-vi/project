import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private apicallservice:ApicallService){}

  journey(journey:string){
   this.apicallservice.journey=journey;
  }
}
