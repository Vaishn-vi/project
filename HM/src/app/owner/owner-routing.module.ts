import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { HotelregisterComponent } from './hotelregister/hotelregister.component';

const routes: Routes = [
  {path :'ownerlanding',component:OwnerlandingComponent},
  {path : 'ownersuccess',component:OwnersuccessComponent},
  {path :'hotelregister', component:HotelregisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
