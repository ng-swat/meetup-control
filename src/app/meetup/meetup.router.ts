import {Routes} from '@angular/router';
import {MeetupDetailsComponent} from './meetup-details/meetup-details.component';
import {MyMeetupsComponent} from './my-meetups/my-meetups.component';
import {ParticipantsListComponent} from '../participants/participants-list/participants-list.component';
import {ParticipantsCheckInComponent} from '../participants/participants-check-in/participants-check-in.component';

export const meetupRoutes: Routes = [
  { path: 'my-meetups', component: MyMeetupsComponent},
  { path: 'meetup-details', component: MeetupDetailsComponent},
  { path: 'participants', component: ParticipantsListComponent},
  { path: 'participants-check-in', component: ParticipantsCheckInComponent}
];
