import { Component, OnInit } from '@angular/core';
import {MeetupService} from '../meetup.service';
import {Meetup} from '../meetup.interface';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup-details.component.html',
  styleUrls: ['./meetup-details.component.css']
})
export class MeetupDetailsComponent implements OnInit {

  public meetupService: MeetupService;
  public meetup: Meetup;
  constructor(meetupService: MeetupService) {
    this.meetupService = meetupService;
    this.meetup = this.meetupService.getMyMeetups()[1];
  }

  ngOnInit() {
  }

}
