import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_PENDING} from '../auth/auth.service';
import {USERS_MOCK, MEETUPS_MOCK} from '../mocks/mock-users';

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
        this.router.navigate(['../my-meetups/']);  // TODO: REMOVE TO STORE
      } else {
        store.dispatch({
          type: LOGIN_FAILURE,
          payload: 'Wrong Email or Password'
        });
      }
    }, 1500);
  }
  return next(action);
};
