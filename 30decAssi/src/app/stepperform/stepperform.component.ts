import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepperform.component.html',
  styleUrls: ['./stepperform.component.css']
})
export class StepperFormComponent implements OnInit {
 wc:number=0;
 wc1:number=0;
 count(){
   var a = this.address.value['presentaddr'];
   this.wc = a.length;
 }
 count1(){
  var b = this.address.value['permanentaddr'];
   this.wc1 = b.length;
 }
  emailpattern!:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  namepattern!:"^[a-zA-Z][a-zA-Z ]+";
  constructor(private fb:FormBuilder,private cs:ServiceService){}
  ngOnInit(): void {
    this.basicform = this.fb.group({
      id:[''],
      fullname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern(this.namepattern)]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      fathersname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern(this.namepattern)]],
      mothersname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern(this.namepattern)]],
      gender:[''],
      dob:[''],
      mob:['',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]]
    })
    this.bankdetails = this.fb.group({
     id:[''],
     fullname:['',[Validators.minLength(6),Validators.maxLength(32),Validators.pattern(this.namepattern)]],
     accountNo:['',[Validators.pattern("^[0-9]*$")]],
     bankName:[''],
     ifsc:[''],
     mobilebanking:[''],
     netbanking:['']
    })
    this.address = this.fb.group({
      id:[''],
      presentaddr:['',[Validators.required,Validators.maxLength(60)]],
      permanentaddr:['',[Validators.required,Validators.maxLength(60)]]
    })
  }
  basicform!:FormGroup;
  bankdetails!:FormGroup;
  address!:FormGroup;
  OnSubmit(){
    if(this.basicform.valid && this.bankdetails.valid && this.address.valid){
      this.cs.BasicInfo(this.basicform.value).subscribe();
      this.cs.BankDetails(this.bankdetails.value).subscribe();
      this.cs.Address(this.address.value).subscribe();
      alert("Data saved");
    }
  }

}