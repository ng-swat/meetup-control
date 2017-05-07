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

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import createLogger from 'redux-logger';

import { rootReducer, IAppState, INITIAL_STATE } from '../store'; // < New
import { CounterActions } from './app.actions'; // <- New

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
  ],
  providers: [StateService, CounterActions ],
  exports: [MyCustomMaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [ createLogger ]);
  }
}
