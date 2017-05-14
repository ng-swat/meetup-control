import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_PENDING, REGISTRATION_PENDING,
  REGISTRATION_FAILURE, REGISTRATION_SUCCESS
} from '../auth/auth.service';
import {USERS_MOCK, MEETUPS_MOCK} from '../mocks/mock-users';
import {UPDATE_LOCATION} from '@angular-redux/router';

export const authMdl = store => next => action => {
  // if (action.type === LOGIN) {
  //   setTimeout(() => {
  //     next({type: LOGIN_SUCCESS, payload: {name: 'NIR'}});
  //   }, 5000);
  //   return next(action);
  // }

  if (action.type === LOGIN_PENDING) {
    setTimeout(() => {
      const loggedInUser = USERS_MOCK.find((user) => {
        return ((user.email === action.payload.loginData.email) && (user.password === action.payload.loginData.password));
      });
      if (loggedInUser) {
        store.dispatch({
          type: LOGIN_SUCCESS,
          payload: loggedInUser
        });

        store.dispatch({
          type: UPDATE_LOCATION,
          payload: '/my-meetups'
        });
      } else {
        store.dispatch({
          type: LOGIN_FAILURE,
          payload: 'Wrong Email or Password'
        });
      }
    }, 1500);
  }


  if (action.type === REGISTRATION_PENDING) {
    setTimeout(() => {
      const existsUser = USERS_MOCK.find(user => {
        return (user.email === action.payload.registrationData.email);
      });
      if (existsUser) {
        store.dispatch({
          type: REGISTRATION_FAILURE,
          payload: 'Email already exists'
        });
      } else {
        store.dispatch({
          type: REGISTRATION_SUCCESS,
          payload: {}
        });

        USERS_MOCK.push({
          name: action.payload.registrationData.name,
          email: action.payload.registrationData.email,
          password: action.payload.registrationData.password
        });

        store.dispatch({
          type: UPDATE_LOCATION,
          payload: '/login'
        });
      }
    }, 1500);
  }
  // default
  return next(action);
};
