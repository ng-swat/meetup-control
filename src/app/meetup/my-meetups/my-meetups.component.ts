import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Meetup} from '../meetup.interface';
import {MeetupService} from '../meetup.service';


@Component({
  selector: 'app-my-meetups',
  templateUrl: './my-meetups.component.html',
  styleUrls: ['./my-meetups.component.css']
})
export class MyMeetupsComponent implements OnInit {

  public meetupService: MeetupService;
  public myMeetups: Meetup[];
  private router: Router;

  constructor(meetupService: MeetupService, router: Router) {
    this.router = router;
    this.meetupService = meetupService;
    this.myMeetups = this.meetupService.getMyMeetups();
  }

  ngOnInit() {
  }

  displayDetails(meetupId: number) {
    this.router.navigate(['../meetup-details']);
    // alert('Need to route to meetup-details...' + meetupId);
  }

}
