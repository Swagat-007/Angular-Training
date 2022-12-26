import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from './model/model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";
  
  EmployeeSave(stu:Employee)
  {
      return this.http.post<Employee>(this.url+"/getAlldata",stu);
  }
  EmployeeEdit(emp:Employee){
    return this.http.post<Employee>(this.url+"/getAlldata",emp);
  }
  EmployeeGetData():Observable<Employee[]>
  {
     return this.http.get<Employee[]>(this.url+"/getAlldata");
  }
 EmpGetsSingle(id:number):Observable<Employee>{
   return this.http.get<Employee>(this.url+"/getAlldata/"+id)
 }
 deleteEmployeeData(sid:number)
 {
     return this.http.delete(this.url+"/getAlldata/"+sid);
 }
 EmpEdit(id:number,emp:Employee){
  return this.http.put(this.url+"/getAlldata/"+id,emp);
 }

}
