import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './booking/movie/movie.component';
import { BookingComponent } from './booking/booking.component';
import { ViewseatsComponent } from './admin/viewseats/viewseats.component';

const routes: Routes = [
{path:'' ,component:HomeComponent},
{path:'signin',component:SigninComponent},
{path:'registration',component:RegistrationComponent},
{path:'admin',component:AdminComponent},
{path:'user',component:UserComponent},
{path:'movie',component:MovieComponent},
{path:'booking',component:BookingComponent},
{path:'viewseats',component:ViewseatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
