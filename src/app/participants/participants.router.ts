import {Routes} from '@angular/router';
import {ParticipantsListComponent} from './participants-list/participants-list.component';
import {ParticipantDetailsComponent} from './participant-details/participant-details.component';
import {ParticipantsCheckInComponent} from './participants-check-in/participants-check-in.component';

export const participantsRoutes: Routes = [
  { path: 'participants-list', component: ParticipantsListComponent},
  { path: 'participant-details', component: ParticipantDetailsComponent},
  { path: 'participant-check-in', component: ParticipantsCheckInComponent}
];
