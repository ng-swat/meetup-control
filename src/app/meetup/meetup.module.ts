import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMeetupsComponent } from './my-meetups/my-meetups.component';
import { MeetupDetailsComponent } from './meetup-details/meetup-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyMeetupsComponent, MeetupDetailsComponent]
})
export class MeetupModule { }
