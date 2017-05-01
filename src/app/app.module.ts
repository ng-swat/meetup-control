import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {LoginModule} from './login/login.module';
import {MeetupModule} from './meetup/meetup.module';
import {ParticipantsModule} from './participants/participants.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyCustomMaterialModule} from './utils/my-custom-material.module';
import 'hammerjs';

/* import routes */
import {loginRoutes} from './login/login.router';
import {meetupRoutes} from './meetup/meetup.router';
import {participantsRoutes} from './participants/participants.router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([...loginRoutes, ...meetupRoutes, ...participantsRoutes]),
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    LoginModule,
    MeetupModule,
    ParticipantsModule
  ],
  exports: [MyCustomMaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
