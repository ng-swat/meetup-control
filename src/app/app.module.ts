import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {StateService} from './utils/state.service';
import {AuthModule} from './auth/auth.module';
import {MeetupModule} from './meetup/meetup.module';
import {ParticipantsModule} from './participants/participants.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyCustomMaterialModule} from './utils/my-custom-material.module';
import 'hammerjs';

/* import routes */
import {authRoutes} from './auth/auth.router';
import {meetupRoutes} from './meetup/meetup.router';
import {participantsRoutes} from './participants/participants.router';

import {NgReduxModule, NgRedux, select} from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import createLogger from 'redux-logger';

import { IAppState, INITIAL_STATE } from '../store'; // < New
import {authReducer} from './auth/auth.reducer';
import {combineReducers} from 'redux';
import {authMdl} from './middlware/auth.middlware';
import {meetupReducer} from './meetup/meetup.reducer';
import {routerReducer} from '@angular-redux/router';

const rootReducer = combineReducers({
  auth: authReducer,
  meetup: meetupReducer,
  router: routerReducer,
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([...authRoutes, ...meetupRoutes, ...participantsRoutes]),
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    AuthModule,
    MeetupModule,
    ParticipantsModule,
    NgReduxModule,
    NgReduxRouterModule,
  ],
  providers: [StateService],
  exports: [MyCustomMaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule {

  @select(['auth', 'user']) public currentUser;
  constructor(ngRedux: NgRedux<any>, ngReduxRouter: NgReduxRouter) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [ authMdl, createLogger ]);
    ngReduxRouter.initialize();

  }
}
