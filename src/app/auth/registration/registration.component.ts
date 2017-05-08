import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private loginService: AuthService;
  public formRegistration: FormGroup;
  private snackBar: MdSnackBar;
  private errorMessage: string;

  @select(['auth', 'pending']) public authPending: boolean;
  @select(['auth', 'error']) public authError: string;

  constructor(authService: AuthService, snackBar: MdSnackBar) {
    this.loginService = authService;
    this.snackBar = snackBar;
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
    } else {
      this.errorMessage = this.getErrorMessage();
      this.snackBar.open(this.errorMessage, 'OK', {
        duration: 2000,
      });
    }
  }

  getErrorMessage(): string {
    if (this.formRegistration.get('name').errors) {
      if (this.formRegistration.get('name').errors.required) {
        return 'Name is Required';
      } else if (this.formRegistration.get('name').errors.minlength) {
        // return `Name ${JSON.stringify(this.formRegistration.get('name').errors.minlength) } `;
        return `Name must contain at least ${this.formRegistration.get('name').errors.minlength.requiredLength} chars`;
      }
    } else if (this.formRegistration.get('email').errors) {
      if (this.formRegistration.get('email').errors.required) {
        return 'Email is Required';
      }else if (this.formRegistration.get('email').errors.email) {
        return 'Email is Not Valid';
      }
    } else if (this.formRegistration.get('password').errors) {
      if (this.formRegistration.get('password').errors.required) {
        return 'Password is Required';
      }
    }
    return '';
  }

}
