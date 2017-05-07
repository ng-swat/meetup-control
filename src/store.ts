import { Action } from 'redux';
import { CounterActions } from './app/app.actions';
import {User} from './app/auth/auth.interface';
import {AuthActions} from './app/auth/auth.actions';

export interface IAppState {
  count: number;
  user: User;
}

export const INITIAL_STATE: IAppState = {
  count: 0,
  user: null
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch (action.type) {
    // case CounterActions.INCREMENT: return { count: lastState.count + 1 };
    // case CounterActions.DECREMENT: return { count: lastState.count - 1 };
    case CounterActions.INCREMENT: return Object.assign({}, lastState, lastState.count++);
    case CounterActions.DECREMENT: return Object.assign({}, lastState, lastState.count--);

    case AuthActions.LOGIN:

  }

  // We don't care about any other actions right now.
  return lastState;
}
