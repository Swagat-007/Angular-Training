import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field'


import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule,MatRippleModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';


import {MatDialogModule} from '@angular/material/dialog';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import{AngularFireModule} from '@angular/fire/compat';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { BothcardComponent } from './bothcard/bothcard.component';
import {MatCardModule} from '@angular/material/card';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    BothcardComponent,
    DoctorProfileComponent,
    PatientProfileComponent,
    LoginDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    
    HttpClientModule,
  MatSidenavModule,MatDialogModule,MatChipsModule,
   ReactiveFormsModule,MatProgressBarModule,
    MatFormFieldModule,MatIconModule,MatButtonModule,MatToolbarModule,MatMenuModule,
    MatRadioModule,MatDatepickerModule,MatInputModule,MatNativeDateModule,MatSelectModule,MatRippleModule,MatListModule,
    AngularFireModule.initializeApp(environment.firebase), MatCardModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), HotToastModule.forRoot(),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
