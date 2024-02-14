import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { SharedModule } from '../shared/shared.module';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';
import { BookhotelComponent } from './bookhotel/bookhotel.component';


@NgModule({
  declarations: [
    UserlandingComponent,
    UsersuccessComponent,
    BookhotelComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
