import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginService: LoginService;
  public formLogin: FormGroup;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
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
    }
  }
}
