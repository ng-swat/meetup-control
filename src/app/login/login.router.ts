import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {PasswordRecoverComponent} from './password-recover/password-recover.component';

export const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'password-recover', component: PasswordRecoverComponent},
];
