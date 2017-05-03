import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MeetupService} from '../meetup.service';
import {Meetup} from '../meetup.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup-details.component.html',
  styleUrls: ['./meetup-details.component.css']
})
export class MeetupDetailsComponent implements OnInit, OnDestroy {

  public meetupService: MeetupService;
  public meetup: Meetup;
  private sub: any;

  constructor(meetupService: MeetupService, private route: ActivatedRoute) {
    this.meetupService = meetupService;
    this.meetup = this.meetupService.getMyMeetups()[1];

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe( (params) => {
      const meetupId = +params['meetupId'];
      this.meetup = this.meetupService.getMyMeetups().find((oMeetup) => {
        return (oMeetup.meetupId === meetupId);
      });
    });
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }


}
