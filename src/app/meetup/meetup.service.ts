import { Injectable } from '@angular/core';
import {Meetup } from './meetup.interface';
import {NgRedux} from '@angular-redux/store';
import {UPDATE_LOCATION} from '@angular-redux/router';

export const GET_MEETUPS = 'GET_MEETUPS';
export const GET_MEETUPS_PENDING = 'GET_MEETUPS_PENDING';
export const GET_MEETUPS_SUCCESS = 'GET_MEETUPS_SUCCESS';
export const GET_MEETUPS_FAILURE = 'GET_MEETUPS_FAILURE';
export const MEETUP_SELECTED = 'MEETUP_SELECTED';
export const GET_MEETUP = 'GET_MEETUP';
export const GET_MEETUP_PENDING = 'GET_MEETUP_PENDING';
export const GET_MEETUP_SUCCESS = 'GET_MEETUP_SUCCESS';
export const GET_MEETUP_FAILURE = 'GET_MEETUP_FAILURE';

@Injectable()
export class MeetupService {

  public meetupsMock: Meetup[] = [
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

  constructor(private store: NgRedux<any>) { }

  getMeetups() {
    this.store.dispatch({
      type: GET_MEETUPS,
      payload: {}
    });

    setTimeout(() => {
      const meetups = this.meetupsMock;
      if (true) {
        this.store.dispatch({
          type: GET_MEETUPS_SUCCESS,
          payload: this.meetupsMock
        });
      // } else {
      //   this.store.dispatch({
      //     type: GET_MEETUPS_FAILURE,
      //     payload: 'Failed to load Meetups'
      //   });
      }
    }, 1500);
  }

  meetupSelected(meetupId: number) {
    this.store.dispatch({
      type: UPDATE_LOCATION,
      payload: `/meetup-details/${meetupId}`
    });
    // this.store.dispatch({
    //   type: 'MEETUP_SELECTED',
    //   payload: meetupId
    // });
  }
  getMeetup(meetupId: number) {
    this.store.dispatch({
      type: 'GET_MEETUP',
      payload: meetupId
    });

    setTimeout(() => {
      const meetup = this.meetupsMock.find((meetupObj) => {
        return (meetupObj.meetupId === meetupId);
      });
      if (meetup) {
        this.store.dispatch({
          type: 'GET_MEETUP_SUCCESS',
          payload: meetup
        });
      } else {
        this.store.dispatch({
          type: 'GET_MEETUP_FAILURE',
          payload: `Meetup Not Exist... [${meetupId}]`
        });
      }
    }, 1500);
  }

  getMyMeetups(): Meetup[] {
    return [

    ];
  }

}

