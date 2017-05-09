import {
  GET_MEETUP,
  GET_MEETUP_PENDING,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE,
  GET_MEETUPS,
  GET_MEETUPS_PENDING,
  GET_MEETUPS_SUCCESS,
  GET_MEETUPS_FAILURE
} from './meetup.service';
import {INITIAL_STATE} from '../../store';


export function meetupReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_MEETUP:
      return Object.assign({}, state, {meetupDetails: null, error: null, pending: true});
    case GET_MEETUP_PENDING:
      return Object.assign({}, state, {meetupDetails: null, error: null, pending: true});
    case GET_MEETUP_SUCCESS:
      return Object.assign({}, state, {meetupDetails: action.payload, error: null, pending: false});
    case GET_MEETUP_FAILURE:
      return Object.assign({}, state, {meetupDetails: null, error: action.payload, pending: false});

    case GET_MEETUPS:
      return Object.assign({}, state, {error: null, pending: true});
    case GET_MEETUPS_PENDING:
      return Object.assign({}, state, {error: null, pending: true});
    case GET_MEETUPS_SUCCESS:
      return Object.assign({}, state, {list: action.payload, error: null, pending: false});
    case GET_MEETUPS_FAILURE:
      return Object.assign({}, state, {list: null, error: action.payload, pending: false});

    default:
      return state;
  }
}
