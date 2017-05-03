import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import {StateService} from '../../utils/state.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginService: LoginService;
  public formLogin: FormGroup;
  private snackBar: MdSnackBar;
  private errorMessage: string;

  public isLoggedIn: boolean;
  public stateService: StateService;

  constructor(loginService: LoginService, stateService: StateService, snackBar: MdSnackBar) {
    this.loginService = loginService;
    this.stateService = stateService;
    this.snackBar = snackBar;
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      rememberMe: new FormControl()
    });
  }

  login() {
    if (this.formLogin.valid) {
      this.loginService.login(this.formLogin.value);
    } else {
      this.errorMessage = this.getErrorMessage();
      this.snackBar.open(this.errorMessage, 'OK', {
        duration: 2000,
      });
    }
  }

  getErrorMessage(): string {
    if (this.formLogin.get('email').errors) {
      if (this.formLogin.get('email').errors.required) {
        return 'Email is Required';
      }else if (this.formLogin.get('email').errors.email) {
        return 'Email is Not Valid';
      }
    } else if (this.formLogin.get('password').errors) {
      if (this.formLogin.get('password').errors.required) {
        return 'Password is Required';
      }
    }
    return '';
  }
}
