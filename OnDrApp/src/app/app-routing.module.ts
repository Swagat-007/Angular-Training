import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BothcardComponent } from './bothcard/bothcard.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
const routes: Routes = [
{path:" ",redirectTo :'login', pathMatch:'full'},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path :'forgot-password', component:ForgotPasswordComponent},
  {path : 'bothcard', component:BothcardComponent},
  {path :'doctor-profile', component:DoctorProfileComponent},
  {path :'patient-profile', component:PatientProfileComponent},
  {path :'login-doctor', component:LoginDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
