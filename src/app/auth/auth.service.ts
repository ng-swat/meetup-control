import { Injectable } from '@angular/core';
import {LoginForm, PasswordRecoverForm, RegistrationForm, User} from './auth.interface';
import {FormGroup} from '@angular/forms';
import {StateService} from '../utils/state.service';

@Injectable()
export class AuthService {

  public stateService: StateService;
  public users: User[] = [
    {email: 'gal@xxx.com', name: 'Gal', password: 'gal'},
    {email: 'gal2@xxx.com', name: 'Gal-2', password: 'gal2'},
    {email: 'qwe@qwe.qwe', name: 'QWE', password: 'qwe'},
  ];

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  login(loginData: LoginForm) {
    console.log('LoginService.login()', loginData);
    const loggedInUser = this.users.find(user => {

      return ((user.email === loginData.email) && (user.password === loginData.password));
    });
    if (loggedInUser) {
      this.stateService.isLoggedIn = true;
      // TODO: Add "loggedInUser" to store
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
