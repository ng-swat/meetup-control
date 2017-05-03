import { Injectable } from '@angular/core';
import {LoginForm, PasswordRecoverForm, RegistrationForm} from './login.interface';
import {FormGroup} from '@angular/forms';
import {StateService} from '../utils/state.service';

@Injectable()
export class LoginService {

  public stateService: StateService;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  login(loginData: LoginForm) {
    console.log('LoginService.login()', loginData);
    if (loginData.email === 'qwe@qwe.qwe' && loginData.password === 'qwe') {
      this.stateService.isLoggedIn = true;
    }
  }

  registration(registrationData: RegistrationForm) {
    console.log('LoginService.registration()', registrationData);
  }

  passwordRecover(passwordRecoverData: PasswordRecoverForm) {
    console.log('LoginService.passwordRecover()', passwordRecoverData);
  }

  logout() {
    this.stateService.isLoggedIn = false;
  }

}
