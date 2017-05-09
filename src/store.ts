import {User} from './app/auth/auth.interface';
import {Meetup} from './app/meetup/meetup.interface';

export interface IAppState {
  auth: User;
  meetup: any;
}

export const INITIAL_STATE: IAppState = {
  auth: null,
  meetup: null
};
