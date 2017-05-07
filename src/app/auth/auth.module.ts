import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule} from '@angular/router';
import {authRoutes} from './auth.router';
import {StateService} from '../utils/state.service';
import {AuthService} from './auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MyCustomMaterialModule} from '../utils/my-custom-material.module';
import {meetupRoutes} from '../meetup/meetup.router';
import {participantsRoutes} from '../participants/participants.router';
import { AuthActions } from './auth.actions';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([...authRoutes, ...meetupRoutes, ...participantsRoutes]),
    ReactiveFormsModule,
    MyCustomMaterialModule
  ],
  providers: [AuthService, StateService, AuthActions],
  declarations: [LoginComponent, LogoutComponent, PasswordRecoverComponent, RegistrationComponent],
  exports: [LoginComponent, LogoutComponent, PasswordRecoverComponent, RegistrationComponent, MyCustomMaterialModule]
})
export class AuthModule { }
