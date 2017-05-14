import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Meetup} from '../meetup.interface';
import {MeetupService} from '../meetup.service';
import {select} from '@angular-redux/store';


@Component({
  selector: 'app-my-meetups',
  templateUrl: './my-meetups.component.html',
  styleUrls: ['./my-meetups.component.css']
})
export class MyMeetupsComponent implements OnInit {

  public meetupService: MeetupService;
  public myMeetups: Meetup[];
  private router: Router;

  @select(['meetup', 'list']) public meetupList: Meetup[];

  constructor(meetupService: MeetupService, router: Router) {
    this.router = router;
    this.meetupService = meetupService;
    // this.myMeetups = this.meetupService.getMyMeetups();
  }

  ngOnInit() {
    this.meetupService.getMeetups();
  }

  displayDetails(meetupId: number) {
    // this.router.navigate(['../meetup-details/' + meetupId]);
    this.meetupService.meetupSelected(meetupId);

  }

}
