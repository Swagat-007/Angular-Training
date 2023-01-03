import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms'
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit{
  constructor(private fb:FormBuilder,private cs:ServiceService){}
  x:number=0;
  hide = true;
  empForm!:FormGroup;
  emailpattern!:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  passpatern!:"^[a-zA-Z0-9]";
  userpattern!:"^[a-zA-Z0-9]";
  namepattern!:"^[a-zA-Z][a-zA-Z ]+";
  ngOnInit(): void {
    this.empForm = this.fb.group({
      id:[''],
      name : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern(this.namepattern)]],
      username: ['',[Validators.required,Validators.pattern(this.userpattern)]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(this.passpatern)]],
      gender : ['',[Validators.required]],
      dob : ['',[Validators.required]],
      mob : ['',[Validators.required,Validators.minLength(10)]],
      skills : ['',[Validators.required]]
    })
  }
  pro(){
    if(this.empForm.controls['name'].valid || this.empForm.controls['username'].valid || this.empForm.controls['email'].valid || this.empForm.controls['password'].valid || this.empForm.controls['dob'].valid || this.empForm.controls['mob'].valid || this.empForm.controls['skills'].valid){
        this.x = this.x + (100/7);
    }
    else{
      
    }
  }
  OnSubmit(){
    console.log(this.empForm.value);
    if(this.empForm.valid){
      this.cs.EmpPost(this.empForm.value).subscribe();
      alert("Succesfull");
    }
  }
}