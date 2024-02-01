import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { SharedModule } from '../shared/shared.module';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { HotelregisterComponent } from './hotelregister/hotelregister.component';


@NgModule({
  declarations: [
    OwnerlandingComponent,
    OwnersuccessComponent,
    HotelregisterComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
