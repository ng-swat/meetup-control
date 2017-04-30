import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {loginRoutes} from './login/login.router';
import {LoginModule} from './login/login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyCustomMaterialModule} from './utils/my-custom-material.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(loginRoutes),
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    LoginModule
  ],
  exports: [MyCustomMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
