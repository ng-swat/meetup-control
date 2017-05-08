import {LOGIN, LOGIN_SUCCESS} from '../auth/auth.service';

export const authMdl = store => next => action => {
  if (action.type === LOGIN) {
    setTimeout(() => {
      next({type: LOGIN_SUCCESS, payload: {name: 'NIR'}});
    }, 5000);
    return next(action);
  }

  return next(action);
};
