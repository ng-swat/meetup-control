import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private loginService: LoginService;
  public formRegistration: FormGroup;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  ngOnInit() {
    this.formRegistration = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  register() {
    if (this.formRegistration.valid) {
      this.loginService.registration(this.formRegistration.value);
    }
  }

}
