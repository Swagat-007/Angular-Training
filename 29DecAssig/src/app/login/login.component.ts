import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private cs:ServiceService,private router:Router){}
  loginForm!:FormGroup;
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
      this.router.navigate(['/dash']);
    }
  }
}