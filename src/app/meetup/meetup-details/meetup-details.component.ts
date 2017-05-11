import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MeetupService} from '../meetup.service';
import {Meetup} from '../meetup.interface';
import {ActivatedRoute} from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';
import {QrCodeViewerComponent} from '../qr-code-viewer/qr-code-viewer.component';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup-details.component.html',
  styleUrls: ['./meetup-details.component.css']
})
export class MeetupDetailsComponent implements OnInit, OnDestroy {

  public meetupService: MeetupService;
  public dialog: MdDialog;
  public dialogRef: MdDialogRef<QrCodeViewerComponent>;
  private sub: any;

  @select(['meetup', 'meetupDetails']) public meetup: Meetup;

  constructor(meetupService: MeetupService, private route: ActivatedRoute, dialog: MdDialog) {
    this.meetupService = meetupService;
    this.dialog = dialog;

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe( (params) => {
      const meetupId = +params['meetupId'];
      this.meetupService.getMeetup(meetupId);
    //   this.meetup = this.meetupService.getMyMeetups().find((oMeetup) => {
    //     return (oMeetup.meetupId === meetupId);
    //   });
    });
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

  openQrCodeDialog(participantId: number) {
    this.dialogRef = this.dialog.open(QrCodeViewerComponent, {});
    const qrCodeViewerInstance = this.dialogRef.componentInstance;
    qrCodeViewerInstance.value = `${this.meetup.meetupId} - ${participantId}`;
  }


}
