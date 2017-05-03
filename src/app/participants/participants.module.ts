import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';
import { ParticipantsCheckInComponent } from './participants-check-in/participants-check-in.component';
import { QRCodeModule } from 'angular2-qrcode';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  declarations: [ParticipantsListComponent, ParticipantDetailsComponent, ParticipantsCheckInComponent]
})
export class ParticipantsModule { }
