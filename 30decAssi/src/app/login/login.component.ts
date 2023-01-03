import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeeForm } from '../model/model';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private cs:ServiceService,private router:Router,public http:HttpClient){}
  loginForm!:FormGroup;
  emp!:EmployeeForm;
  hide = true;
  userpattern!:"^[a-zA-Z0-9]";
  passpatern!:"^[a-zA-Z0-9]";
  ngOnInit(): void {
    this.loginForm = this.fb.group({
     
      username: ['',[Validators.required,Validators.pattern(this.userpattern)]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(this.passpatern)]],
     
    })
  }
  
  OnSubmit(){
    if(this.loginForm.valid){
      this.http.get<any>("http://localhost:3000/Emp").subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.username === this.loginForm.value['username'] && a.password === this.loginForm.value['password']
        });
        if(user){
          alert('successfull');
          console.log(user);
          this.loginForm.reset();
          this.router.navigate(['dash']);
        }
        else{
          alert("Invalid Crediantial");
        }
      })
    }
  }
}