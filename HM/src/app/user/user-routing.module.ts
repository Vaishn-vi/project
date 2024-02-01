import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';

const routes: Routes = [
  {path : 'userlanding' , component:UserlandingComponent},
  {path: 'usersuccess' , component:UsersuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
