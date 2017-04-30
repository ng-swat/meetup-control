import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-password-reminder',
  templateUrl: './password-recover.component.html',
  styleUrls: ['./password-recover.component.css']
})
export class PasswordRecoverComponent implements OnInit {

  private loginService: LoginService;
  public formPasswordRecover: FormGroup;
  private snackBar: MdSnackBar;
  private errorMessage: string;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  ngOnInit() {
    this.formPasswordRecover = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  passwordRecover() {
    if (this.formPasswordRecover.valid) {
      this.loginService.passwordRecover(this.formPasswordRecover.value);
    } else {
      this.errorMessage = this.getErrorMessage();
      this.snackBar.open(this.errorMessage, 'OK', {
        duration: 2000,
      });
    }
  }

  getErrorMessage(): string {
     if (this.formPasswordRecover.get('password').errors) {
      if (this.formPasswordRecover.get('password').errors.required) {
        return 'Password is Required';
      }
    }
    return '';
  }

}
