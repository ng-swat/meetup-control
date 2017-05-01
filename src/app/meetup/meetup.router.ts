import {Routes} from '@angular/router';
import {MeetupDetailsComponent} from './meetup-details/meetup-details.component';
import {MyMeetupsComponent} from './my-meetups/my-meetups.component';

export const meetupRoutes: Routes = [
  { path: 'my-meetups', component: MyMeetupsComponent},
  { path: 'meetup-details', component: MeetupDetailsComponent}
];
