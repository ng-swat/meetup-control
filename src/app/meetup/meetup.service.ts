import { Injectable } from '@angular/core';
import {Meetup } from './meetup.interface';
import {NgRedux} from '@angular-redux/store';
import {UPDATE_LOCATION} from '@angular-redux/router';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

export const GET_MEETUPS = 'GET_MEETUPS';
export const GET_MEETUPS_PENDING = 'GET_MEETUPS_PENDING';
export const GET_MEETUPS_SUCCESS = 'GET_MEETUPS_SUCCESS';
export const GET_MEETUPS_FAILURE = 'GET_MEETUPS_FAILURE';
export const MEETUP_SELECTED = 'MEETUP_SELECTED';
export const GET_MEETUP = 'GET_MEETUP';
export const GET_MEETUP_PENDING = 'GET_MEETUP_PENDING';
export const GET_MEETUP_SUCCESS = 'GET_MEETUP_SUCCESS';
export const GET_MEETUP_FAILURE = 'GET_MEETUP_FAILURE';
export const GET_MEETUP_RSVP = 'GET_MEETUP_RSVP';
export const GET_MEETUP_RSVP_SUCCESS = 'GET_MEETUP_RSVP_SUCCESS';
export const GET_MEETUP_RSVP_FAILURE = 'GET_MEETUP_RSVP_FAILURE';

@Injectable()
export class MeetupService {

  urlEvents = `https://api.meetup.com/:urlName/events
?photo-host=public&page=20&sig_id=184710454&sig=2579ec997be0dd9c4a3a47bf5dab03c7a9a79523`;
  urlEvent = `https://api.meetup.com/:urlName/events/:event_id
?photo-host=public&sig_id=184710454&sig=bd9f1dbb9a90edc7b885a322cfbc6e30fe19e7e1`;
  urlRsvp = `https://api.meetup.com/Angular-IL/events/:event_id/rsvps
?photo-host=public&sig_id=184710454&sig=26eb64d52444cb0bb7a2b293cb19bc2e159a0e8c`;
  corsPrefix = 'https://crossorigin.me/';

  constructor(private store: NgRedux<any>, private http: Http) {

  }

  private getEventsUrl(urlName) {
    return this.corsPrefix + this.urlEvents.replace(':urlName', urlName);
  }
  private getEventUrl(urlName, event_id) {
    return this.corsPrefix + this.urlEvent.replace(':urlName', urlName).replace(':event_id', event_id);
  }
  private getRsvpUrl(urlName, event_id) {
    return this.corsPrefix + this.urlRsvp.replace(':urlName', urlName).replace(':event_id', event_id);
  }

  getMeetups() {
    this.store.dispatch({
      type: GET_MEETUPS,
      payload: {}
    });


    this.http.get(this.getEventsUrl('Angular-IL')).toPromise()
      .then((res: any) => {
        const meetups = JSON.parse(res._body);
        this.store.dispatch({
                type: GET_MEETUPS_SUCCESS,
                payload: meetups
        });
      })
      .catch( err => {
        console.log(err);
        this.store.dispatch({
          type: GET_MEETUPS_FAILURE,
          payload: err.message
        });
      });
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

    this.http.get(this.getEventUrl('Angular-IL', meetupId)).toPromise()
      .then((res: any) => {
        const meetup = JSON.parse(res._body);
        this.store.dispatch({
          type: GET_MEETUP_SUCCESS,
          payload: meetup
        });
        this.store.dispatch({
          type: 'GET_MEETUP_RSVP',
          payload: meetupId
        });

        this.http.get(this.getRsvpUrl('Angular-IL', meetupId)).toPromise()
          .then((resRsvp: any) => {
            const rsvp = JSON.parse(resRsvp._body);
            this.store.dispatch({
              type: GET_MEETUP_RSVP_SUCCESS,
              payload: rsvp
            });
          })
          .catch( err => {
            console.log(err);
            this.store.dispatch({
              type: GET_MEETUP_RSVP_FAILURE,
              payload: `Rsvp Error... [${meetupId}]`
            });
          });
      })
      .catch( err => {
        console.log(err);
        this.store.dispatch({
          type: GET_MEETUP_FAILURE,
          payload: `Meetup Not Exist... [${meetupId}]`
        });
      });

  }

  getMyMeetups(): Meetup[] {
    return [

    ];
  }

}

