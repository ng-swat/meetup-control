import { Injectable } from '@angular/core';
import {Meetup } from './meetup.interface';

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
        participants: [
          { participantId: 101,
            name: 'Gal - 101'
          },
          { participantId: 102,
            name: 'Yoni - 102'
          },
          { participantId: 103,
            name: 'Ben Or - 103'
          },
          { participantId: 104,
            name: 'Nir - 104'
          },
          { participantId: 105,
            name: 'User - 105'
          },
          { participantId: 106,
            name: 'User - 106'
          },
          { participantId: 107,
            name: 'User - 107'
          },
          { participantId: 108,
            name: 'User - 108'
          },
          { participantId: 101,
            name: 'User - 101'
          }
        ]
      },
      {
        meetupId: 1002,
        title: 'Title for 1002',
        subtitle: 'sub-title for 1002',
        startDate: new Date(),
        endDate: new Date(),
        description: 'Description for 1002',
        participants: [
          { participantId: 201,
            name: 'Gal - 201'
          },
          { participantId: 202,
            name: 'Yoni - 202'
          },
          { participantId: 203,
            name: 'Ben Or - 203'
          },
          { participantId: 204,
            name: 'Nir - 204'
          }
          ]
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

