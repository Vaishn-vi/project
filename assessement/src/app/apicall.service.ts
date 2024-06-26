import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  name='poonam';
  journey: any;
  userName: any;

  url = 'http://localhost:3000'
  dataById: any;
 
   constructor( private httpClient : HttpClient){}

   postApiCall(endPoint : string, formData:any){
    let url = this.url + '/' + endPoint;
    return  this.httpClient.post(url,formData)
   }

   getApiCall(journey:any , id?:any){
    let url = id ? this.url + '/' + journey +'/' + id : this.url + '/' + journey;
    return this.httpClient.get(url)
   }
   updateData(endPoint:any,id:any,body:any) {
   let url = this.url + '/' + endPoint +'/' + id;
   return this.httpClient.patch(url,body)
  }
  deletedata(endPoint:any,id:any){
    let url=this.url+'/'+ endPoint+'/'+ id;
     return this.httpClient.delete(url)

  }
}

