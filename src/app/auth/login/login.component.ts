import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  username = new FormControl('', [Validators.required])
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/gm)]);
  remember = new FormControl();

  loginFormGroup = new FormGroup({
    username: this.username,
    password: this.password,
    remember: this.remember
  })

  login() {
    this.auth.dispatchLogin(this.username.value as string, this.password.value as string, this.remember.value);
  }
}