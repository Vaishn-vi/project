import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { SharedModule } from '../shared/shared.module';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';



@NgModule({
  declarations: [
    AdminlandingComponent,
    AdminsuccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  
  ]
})
export class AdminModule { }
