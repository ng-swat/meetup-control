import { Injectable } from '@angular/core';
import { Action } from 'redux';
import {LoginForm, User} from './auth.interface';

@Injectable()
export class AuthActions {
  static LOGIN = 'LOGIN';
  static LOGIN_PENDING = 'LOGIN_PENDING';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGIN_FAILURE = 'LOGIN_FAILURE';
  static LOGOUT = 'LOGOUT';



  // login(loginData: LoginForm): Action {
  //   // const loggedInUser = this.users.find(user => {
  //   //   return ((user.email === loginData.email) && (user.password === loginData.password));
  //   // });
  //   // if (loggedInUser) {
  //   //   return { type: AuthActions.LOGIN_SUCCESS};
  //   // }else {
  //   //   return { type: AuthActions.LOGIN_FAILURE};
  //   // }
  // }

  logout(): Action {
    return {type: AuthActions.LOGOUT};
  }
}
