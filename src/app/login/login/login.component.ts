import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginService: LoginService;
  public formLogin: FormGroup;
  private snackBar: MdSnackBar;

  constructor(loginService: LoginService, snackBar: MdSnackBar) {
    this.loginService = loginService;
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
      // this.loginService.showFirstMessage(this.formLogin);
      this.snackBar.open('Form is not valid.', 'OK', {
        duration: 2000,
      });
    }
  }
}
