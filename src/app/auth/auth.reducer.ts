import {
  LOGIN_SUCCESS, LOGOUT, LOGIN, LOGIN_PENDING, LOGIN_FAILURE,
  REGISTRATION_PENDING, REGISTRATION_SUCCESS, REGISTRATION_FAILURE, PASSWORD_PENDING, PASSWORD_SUCCESS, PASSWORD_FAILURE
} from './auth.service';
import {INITIAL_STATE} from '../../store';


export function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {error: null, pending: true});
    case LOGIN_PENDING:
      return Object.assign({}, state, {error: null, pending: true});
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {user: action.payload, error: null, pending: false});
    case LOGIN_FAILURE:
      return Object.assign({}, state, {user: null, error: action.payload, pending: false});
    case REGISTRATION_PENDING:
      return Object.assign({}, state, {error: null, pending: true});
    case REGISTRATION_SUCCESS:
      return Object.assign({}, state, {error: null, pending: false});
    case REGISTRATION_FAILURE:
      return Object.assign({}, state, {user: null, error: action.payload, pending: false});
    case PASSWORD_PENDING:
      return Object.assign({}, state, {error: null, pending: true});
    case PASSWORD_SUCCESS:
      return Object.assign({}, state, {error: action.payload, pending: false});
    case PASSWORD_FAILURE:
      return Object.assign({}, state, {error: action.payload, pending: false});
    case LOGOUT:
      return Object.assign({}, state, INITIAL_STATE);
    default:
      return state;
  }
}
