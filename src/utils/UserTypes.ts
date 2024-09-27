export interface RegisterState {
  fullname: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
}

export interface LoginState {
  email: string;
  password: string;
}
