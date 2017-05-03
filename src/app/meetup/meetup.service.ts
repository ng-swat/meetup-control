import { Injectable } from '@angular/core';
import {Meetup} from './meetup.interface';

@Injectable()
export class MeetupService {

  constructor() { }

  getMyMeetups(): Meetup[] {
    return [
      {
        meetupId: 1001,
        title: 'Title for 1001',
        subtitle: 'sub-title for 1001',
        startDate: new Date(),
        endDate: new Date(),
        description: 'Description for 1001',
      },
      {
        meetupId: 1002,
        title: 'Title for 1002',
        subtitle: 'sub-title for 1002',
        startDate: new Date(),
        endDate: new Date(),
        description: 'Description for 1002',
      },
      {
        meetupId: 1003,
        title: 'Title for 1003',
        subtitle: 'sub-title for 1003',
        startDate: new Date(),
        endDate: new Date(),
        description: 'Description for 1003',
      }
    ];
  }

}

