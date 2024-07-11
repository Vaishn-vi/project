import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  dataById: any;
  constructor(private http: HttpClient) { }
  postApiCall(formData: any, p0: any){
    let  posturl="https://dummy.restapiexample.com/api/v1/create";
    return  this.http.post(posturl,formData)
   }
   getApiCall(){
    let getUrl = "https://dummy.restapiexample.com/api/v1/employees";
    return this.http.get(getUrl)
   }
//    updateData(id:any,body:any){
//    let updateUrl = "https://dummy.restapiexample.com/api/v1/update/6686" + id;
//    return this.http.patch(updateUrl,body)
//   }
//   deletedata(id:any){
//     let deleteUrl="https://dummy.restapiexample.com/api/v1/delete/2"+ id;
//      return this.http.delete(deleteUrl)
// }
}
