import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path : "", component:LandingComponent},
  {path : 'admin' , loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path : 'user' , loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path : 'owner' , loadChildren:()=>import('./owner/owner.module').then(m=>m.OwnerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
