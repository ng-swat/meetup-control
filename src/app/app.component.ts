import {Component, OnDestroy} from '@angular/core';
import {StateService} from './utils/state.service';
import {NgRedux, select} from '@angular-redux/store'; // <- New
import {IAppState} from '../store';
import {count} from 'rxjs/operator/count';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth/auth.service'; // <- New

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public stateService: StateService;
//  count: number; // <- New
  @select()
  count$: Observable<number>;

  @select(['auth', 'user', 'name']) public currentUser;

  constructor(stateService: StateService,
              private ngRedux: NgRedux<IAppState>, // <- New
              private authService: AuthService) {
    this.stateService = stateService;
    this.stateService.isLoggedIn = true; // TODO: REMOVE WHEN LOGIN IS WORKING WITH DB

    // this.subscription = ngRedux.select<number>('count') // <- New
    //   .subscribe(newCount => this.count = newCount);    // <- New
  }

  // ngOnDestroy() {                    // <- New
  //   this.subscription.unsubscribe(); // <- New
  // }

  logout() {
    this.authService.logout();
  }
}
