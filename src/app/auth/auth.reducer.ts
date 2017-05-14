import {
  LOGIN_SUCCESS, LOGOUT, LOGIN, LOGIN_PENDING, LOGIN_FAILURE,
  REGISTRATION_PENDING, REGISTRATION_SUCCESS, REGISTRATION_FAILURE, PASSWORD_PENDING, PASSWORD_SUCCESS, PASSWORD_FAILURE
} from './auth.service';
import {INITIAL_STATE} from '../../store';


export function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case LOGIN_PENDING:
      return {...state, error: null, pending: true};
    case LOGIN_SUCCESS:
      return {...state, user: action.payload, error: null, pending: false};
    case LOGIN_FAILURE:
      return {...state, user: null, error: action.payload, pending: false};

    case REGISTRATION_PENDING:
      return {...state, error: null, pending: true};
    case REGISTRATION_SUCCESS:
      return {...state, error: null, pending: false};
    case REGISTRATION_FAILURE:
      return {...state, user: null, error: action.payload, pending: false};

    case PASSWORD_PENDING:
      return {...state, error: null, pending: true};
    case PASSWORD_SUCCESS:
      return {...state, error: action.payload, pending: false};
    case PASSWORD_FAILURE:
      return {...state, error: action.payload, pending: false};

    case LOGOUT:
      return {INITIAL_STATE};
    default:
      return state;
  }
}
