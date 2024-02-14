import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';
import { BookhotelComponent } from './bookhotel/bookhotel.component';

const routes: Routes = [
  {path : 'userlanding' , component:UserlandingComponent},
  {path: 'usersuccess' , component:UsersuccessComponent},
  {path : 'bookhotel',component:BookhotelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
