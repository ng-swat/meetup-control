import {User} from './app/auth/auth.interface';

export interface IAppState {
  auth: User;
}

export const INITIAL_STATE: IAppState = {
  auth: null
};
