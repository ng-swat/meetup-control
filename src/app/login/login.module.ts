import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule} from '@angular/router';
import {loginRoutes} from './login.router';
import {LoginService} from './login.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MyCustomMaterialModule} from '../utils/my-custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(loginRoutes),
    ReactiveFormsModule,
    MyCustomMaterialModule
  ],
  providers: [LoginService],
  declarations: [LoginComponent, LogoutComponent, PasswordRecoverComponent, RegistrationComponent],
  exports: [LoginComponent, LogoutComponent, PasswordRecoverComponent, RegistrationComponent, MyCustomMaterialModule]
})
export class LoginModule { }
