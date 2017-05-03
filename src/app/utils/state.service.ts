import { Injectable } from '@angular/core';

@Injectable()
export class StateService {

  public isLoggedIn: boolean;
  public loggedInEmail: string;

  constructor() {
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

}
