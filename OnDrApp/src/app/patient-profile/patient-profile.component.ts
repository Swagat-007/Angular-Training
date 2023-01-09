import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit{
  constructor(private us :UsersService, private fb : FormBuilder){}
  patientdetails!:FormGroup;


  ngOnInit(): void {
    this.patientdetails = this.fb.group({
      id:[''],
      patientName : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      patientEmail : ['',[Validators.required,Validators.email]],
      patientGender : ['',[Validators.required]],
      patientDob : ['',[Validators.required]],
      patientPhone : ['',[Validators.required,Validators.minLength(10)]],
      patientAddress:['',[Validators.required,Validators.maxLength(60)]],
     patientAge:['',Validators.required]
    })
   
  }
savePatient(){
  // console.log(this.patientdetails.value);
  if(this.patientdetails.valid){
    this.us.Patientdata(this.patientdetails.value).subscribe();
    alert("Succesfull");
  }
}
}
