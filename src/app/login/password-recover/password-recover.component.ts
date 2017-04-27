import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-reminder',
  templateUrl: './password-recover.component.html',
  styleUrls: ['./password-recover.component.css']
})
export class PasswordRecoverComponent implements OnInit {

  private loginService: LoginService;
  public formPasswordRecover: FormGroup;

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
    }
  }

}
