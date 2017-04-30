import { Injectable } from '@angular/core';
import {LoginForm, PasswordRecoverForm, RegistrationForm} from './login.interface';
import {FormGroup} from '@angular/forms';

@Injectable()
export class LoginService {

  constructor() { }

  login(loginData: LoginForm) {
    console.log('LoginService.login()', loginData);
  }

  registration(registrationData: RegistrationForm) {
    console.log('LoginService.registration()', registrationData);
  }

  passwordRecover(passwordRecoverData: PasswordRecoverForm) {
    console.log('LoginService.passwordRecover()', passwordRecoverData);
  }

}
