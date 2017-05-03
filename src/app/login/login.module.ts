import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule} from '@angular/router';
import {loginRoutes} from './login.router';
import {StateService} from '../utils/state.service';
import {LoginService} from './login.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MyCustomMaterialModule} from '../utils/my-custom-material.module';
import {meetupRoutes} from '../meetup/meetup.router';
import {participantsRoutes} from '../participants/participants.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([...loginRoutes, ...meetupRoutes, ...participantsRoutes]),
    ReactiveFormsModule,
    MyCustomMaterialModule
  ],
  providers: [LoginService, StateService],
  declarations: [LoginComponent, LogoutComponent, PasswordRecoverComponent, RegistrationComponent],
  exports: [LoginComponent, LogoutComponent, PasswordRecoverComponent, RegistrationComponent, MyCustomMaterialModule]
})
export class LoginModule { }
