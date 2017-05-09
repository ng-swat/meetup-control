import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMeetupsComponent } from './my-meetups/my-meetups.component';
import {RouterModule} from '@angular/router';
import {MyCustomMaterialModule} from '../utils/my-custom-material.module';


import { MeetupDetailsComponent } from './meetup-details/meetup-details.component';
import {MeetupService} from './meetup.service';
import {QRCodeModule} from 'angular2-qrcode';
import { QrCodeViewerComponent } from './qr-code-viewer/qr-code-viewer.component';
import {MdProgressSpinnerModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MyCustomMaterialModule,
    MdProgressSpinnerModule,
    QRCodeModule,
  ],
  providers: [MeetupService],
  entryComponents: [QrCodeViewerComponent],
  declarations: [MyMeetupsComponent, MeetupDetailsComponent, QrCodeViewerComponent]
})
export class MeetupModule {}
