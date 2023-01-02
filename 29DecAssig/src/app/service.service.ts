import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { EmployeeForm } from './model/model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 url:string = "http://localhost:3000";
  constructor(public http:HttpClient) { }
  EmpPost(emp:EmployeeForm){
    console.log(emp);
   return this.http.post<EmployeeForm>(this.url+"/Emp",emp);
  }
}