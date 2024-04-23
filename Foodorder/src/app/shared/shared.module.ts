import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  id!:number;
  name!:string;
  price!:number;
  cookTime!:string;
  favorite:boolean=false;
  star:number=0;
  tags!:string[];
  imageurl!:string;
  origin!:string[];
 }
