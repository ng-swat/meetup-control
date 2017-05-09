import { Injectable } from '@angular/core';
import {LoginForm, PasswordRecoverForm, RegistrationForm, User} from './auth.interface';
import {FormGroup} from '@angular/forms';
import {StateService} from '../utils/state.service';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../store';

export const LOGIN = 'LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTRATION_PENDING = 'REGISTRATION_PENDING';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
export const PASSWORD_PENDING = 'PASSWORD_PENDING';
export const PASSWORD_SUCCESS = 'PASSWORD_SUCCESS';
export const PASSWORD_FAILURE = 'PASSWORD_FAILURE';

export const LOGOUT = 'LOGOUT';

@Injectable()
export class AuthService {



  public stateService: StateService;
  public users: User[] = [
    {email: 'gal@xxx.com', name: 'Gal', password: 'gal'},
    {email: 'gal2@xxx.com', name: 'Gal-2', password: 'gal2'},
    {email: 'qwe@qwe.qwe', name: 'Gal Tamir', password: 'qwe'},
  ];

  constructor(stateService: StateService, private store: NgRedux<IAppState>) {
    this.stateService = stateService;
  }

  login(loginData: LoginForm) {
    console.log('LoginService.login()', loginData);
    this.store.dispatch({
      type: LOGIN_PENDING,
      payload: {}
    });

    setTimeout(() => {
      const loggedInUser = this.users.find((user) => {
        return ((user.email === loginData.email) && (user.password === loginData.password));
      });
      if (loggedInUser) {
        // this.stateService.isLoggedIn = true;
        this.store.dispatch({
          type: LOGIN_SUCCESS,
          payload: loggedInUser
        });
      } else {
        this.store.dispatch({
          type: LOGIN_FAILURE,
          payload: 'Wrong Email or Password'
        });
      }
    }, 1500);
  }

  registration(registrationData: RegistrationForm) {
    console.log('LoginService.registration()', registrationData);
    this.store.dispatch({
      type: REGISTRATION_PENDING,
      payload: {}
    });

    setTimeout(() => {
      const existsUser = this.users.find(user => {
        return (user.email === registrationData.email);
      });
      if (existsUser) {
        this.store.dispatch({
          type: REGISTRATION_FAILURE,
          payload: 'Email already exists'
        });
      } else {
        this.store.dispatch({
          type: REGISTRATION_SUCCESS,
          payload: {}
        });

        this.users.push({
          name: registrationData.name,
          email: registrationData.email,
          password: registrationData.password
        });
      }
    }, 1500);
  }

  passwordRecover(passwordRecoverData: PasswordRecoverForm) {
    console.log('LoginService.passwordRecover()', passwordRecoverData);
    this.store.dispatch({
      type: PASSWORD_PENDING,
      payload: {}
    });

    setTimeout(() => {
      const existsUser = this.users.find(user => {
        return (user.email === passwordRecoverData.email);
      });
      if (existsUser) {
        this.store.dispatch({
          type: PASSWORD_SUCCESS,
          payload: `Password is: ${existsUser.password}`
        });
      } else {
        this.store.dispatch({
          type: PASSWORD_FAILURE,
          payload: `Email not found`
        });
      }
    }, 1500);
  }

  logout() {
    // this.stateService.isLoggedIn = false;
    this.store.dispatch({
      type: LOGOUT,
      payload: {}
    });
  }

}
