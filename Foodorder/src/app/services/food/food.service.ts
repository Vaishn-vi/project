import { Injectable } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getall():SharedModule[]{
    return[
      {
        id:1,
        name:"Pizza",
        price:250,
        cookTime:"10-20 min",
        favorite:true,
        star:3.5,
        tags:['Fastfood','pizza'],
        imageurl: 'assets/food1.jpg',
        origin:['germany','us']
      },
      {
        id:2,
        name:"Burger",
        price:200,
        cookTime:"10-20 min",
        favorite:false,
        star:4.5,
        tags:['Fastfood','Burger'],
        imageurl:'assets/food2.jpg',
        origin:['India']
      },
      {
        id:3,
        name:"Soup",
        price:150,
        cookTime:"10-15 min",
        favorite:false,
        star:2.5,
        tags:['Fastfood','Soup'],
        imageurl:'/assets/food3.jpg',
        origin:['Australia']
      },
      {
        id:4,
        name:"Coffee",
        price:100,
        cookTime:"10 min",
        favorite:true,
        star:4.5,
        tags:['Refresher','Coffee'],
        imageurl:'/assets/food4.jpg',
        origin:['India']
      },
      {
        id:2,
        name:"Momos",
        price:120,
        cookTime:"20-25 min",
        favorite:false,
        star:4.5,
        tags:['Fastfood','Momos'],
        imageurl:'/assets/food5.jpg',
        origin:['India', "US"]
      },
      {
        id:2,
        name:"Noodles",
        price:150,
        cookTime:"10-15 min",
        favorite:true,
        star:3.5,
        tags:['Fastfood','Noodles'],
        imageurl:'/assets/food6.jpg',
        origin:['India',"China"]
      },
      {
        id:2,
        name:"Fries",
        price:120,
        cookTime:"10-15 min",
        favorite:false,
        star:2.5,
        tags:['Fastfood','Fries'],
        imageurl:'/assets/food7.jpg',
        origin:['India']
      },
      {
        id:2,
        name:"Sandwich",
        price:180,
        cookTime:"10-20 min",
        favorite:true,
        star:4.5,
        tags:['Fastfood','Sandwich'],
        imageurl:'/assets/food8.jpg',
        origin:['India',"jermany"]
      },
      {
        id:2,
        name:"triple rice",
        price:200,
        cookTime:"25-30 min",
        favorite:false,
        star:4.5,
        tags:['Fastfood','triple rice'],
        imageurl:'/assets/food9.jpg',
        origin:['India',"US"]
      },
      {
        id:2,
        name:"Pestry",
        price:50,
        cookTime:"10-20 min",
        favorite:false,
        star:4.5,
        tags:['Fastfood','Pestry'],
        imageurl:'/assets/food10.jpg',
        origin:['India']
      },
      {
        id:2,
        name:"Sayabean Chilli",
        price:180,
        cookTime:"20-25 min",
        favorite:true,
        star:4.5,
        tags:['Fastfood','Chilli'],
        imageurl:'/assets/food11.jpg',
        origin:['India']
      },
      {
        id:2,
        name:"Juice",
        price:90,
        cookTime:"10-15 min",
        favorite:true,
        star:4.5,
        tags:['Refreshment ','Juice'],
        imageurl:'/assets/food12.jpg',
        origin:['India']
      }
    ]
  }
}
