import { Injectable } from '@angular/core';
import {LoginForm, PasswordRecoverForm, RegistrationForm} from './login.interface';

@Injectable()
export class LoginService {

  static login(loginData: LoginForm) {
    console.log('LoginService.login()', loginData);
  }

  static registration(registrationData: RegistrationForm) {
    console.log('LoginService.registration()', registrationData);
  }

  static passwordRecover(passwordRecoverData: PasswordRecoverForm) {
    console.log('LoginService.passwordRecover()', passwordRecoverData);
  }

  constructor() { }
}
