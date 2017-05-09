import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-password-reminder',
  templateUrl: './password-recover.component.html',
  styleUrls: ['./password-recover.component.css']
})
export class PasswordRecoverComponent implements OnInit {

  private authService: AuthService;
  public formPasswordRecover: FormGroup;
  private snackBar: MdSnackBar;
  private errorMessage: string;

  @select(['auth', 'pending']) public authPending: boolean;
  @select(['auth', 'error']) public authError: string;

  constructor(authService: AuthService, snackBar: MdSnackBar) {
    this.authService = authService;
    this.snackBar = snackBar;
  }

  ngOnInit() {
    this.formPasswordRecover = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  passwordRecover() {
    if (this.formPasswordRecover.valid) {
      this.authService.passwordRecover(this.formPasswordRecover.value);
    } else {
      this.errorMessage = this.getErrorMessage();
      this.snackBar.open(this.errorMessage, 'OK', {
        duration: 2000,
      });
    }
  }

  getErrorMessage(): string {
     if (this.formPasswordRecover.get('email').errors) {
      if (this.formPasswordRecover.get('email').errors.required) {
        return 'Email is Required';
      } else if (this.formPasswordRecover.get('email').errors.email) {
        return 'Email is Not Valid';
      }
    }
    return '';
  }

}
