export interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface RegistrationForm {
  name: string;
  email: string;
  password: string;
}
export interface PasswordRecoverForm {
  email: string;
}
export interface User {
  email: string;
  password: string;
  name: string;
}
