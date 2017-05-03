import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-participants-check-in',
  templateUrl: './participants-check-in.component.html',
  styleUrls: ['./participants-check-in.component.css']
})
export class ParticipantsCheckInComponent implements OnInit {

  public qrForm: FormGroup;
  constructor() {
    this.qrForm = new FormGroup({
      participant: new FormControl('123'),
      meetupId: new FormControl('1001')
    });
  }

  ngOnInit() {
  }

}
