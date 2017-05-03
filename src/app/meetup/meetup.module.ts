import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMeetupsComponent } from './my-meetups/my-meetups.component';
import {RouterModule} from '@angular/router';
import {MyCustomMaterialModule} from '../utils/my-custom-material.module';


import { MeetupDetailsComponent } from './meetup-details/meetup-details.component';
import {MeetupService} from './meetup.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MyCustomMaterialModule
  ],
  providers: [MeetupService],
  declarations: [MyMeetupsComponent, MeetupDetailsComponent]
})
export class MeetupModule { }
