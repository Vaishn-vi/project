import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminlandingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  
  ]
})
export class AdminModule { }
