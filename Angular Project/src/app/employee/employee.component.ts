import { Component, OnInit } from '@angular/core';
import{Employee} from 'src/app/model/model';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 constructor(private fb: FormBuilder, private cs: ServiceService){}
 emp!:Employee[];
 Employee!:FormGroup;

  namepattern!:"^[a-zA-Z ]{2,20}$";
  
 


 ngOnInit(): void {

  this.Employee=this.fb.group({
    id:[''],
    name:['',[Validators.required,Validators.pattern(this.namepattern)]],
    mobno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    address:['',[Validators.required]]
  })

  this.cs.EmployeeGetData().subscribe(list =>{



    this.emp=list

  

 
  })
}

onSubmit()
  {

    if(this.Employee.valid)
    {
      if(this.Employee.value['id'] == ''){
    console.log(this.Employee.value);
    this.cs.EmployeeSave(this.Employee.value).subscribe();
    window.location.reload();
      }
      else{
        this.cs.EmpEdit(this.Employee.value['id'],this.Employee.value).subscribe();
        window.location.reload();
      }
    }
 

}
emp1!:Employee
edit(id:number)
{
  this.cs.EmpGetsSingle(id).subscribe(em => {
    this.emp1 = em;
    console.log(this.emp1);
  this.Employee = new FormGroup({
    id:new FormControl(this.emp1.id),
    name: new FormControl(this.emp1.name),
    mobno:new FormControl(this.emp1.mobno),
    address:new FormControl(this.emp1.address)
  });
  });
  
}
deleteDataById(id :number)

{

this.cs.deleteEmployeeData(id).subscribe( data =>{

console.log(data);

window.location.reload();

})

}
reset(){
  this.Employee.reset();
  //window.location.reload();
}


}


