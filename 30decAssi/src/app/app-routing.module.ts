import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent } from './userform/userform.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StepperFormComponent } from './stepperform/stepperform.component';

const routes: Routes = [
  {path:"register", component:UserformComponent},
  {path:"login", component:LoginComponent},
  {path:"dash", component:DashboardComponent},
  {path:"stepper", component:StepperFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }