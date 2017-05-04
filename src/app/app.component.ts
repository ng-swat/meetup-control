import { Component } from '@angular/core';
import {StateService} from './utils/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public stateService: StateService;

  constructor(stateService: StateService) {
    this.stateService = stateService;
    this.stateService.isLoggedIn = true; // TODO: REMOVE WHEN LOGIN IS WORKING WITH DB
  }

}
