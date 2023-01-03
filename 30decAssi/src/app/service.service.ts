import { Injectable } from '@angular/core';
import { Observable, Observer,map,pipe } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Address, BankDetails, BasicInfo, EmployeeForm } from './model/model';
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
  BasicInfo(basic:BasicInfo){
    console.log(basic);
    return this.http.post<BasicInfo>(this.url+"/BasicInfo",basic);
  }
  BankDetails(bank:BankDetails){
    console.log(bank);
    return this.http.post<BankDetails>(this.url+"/BankDetails",bank);
  }
  Address(addr:Address){
    return this.http.post<Address>(this.url+"/Address",addr);
  }
 
}