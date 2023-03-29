import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import * as fromApp from '../../store/app.reducer'
import * as AuthActions from '../store/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private store: Store<fromApp.AppState>,) { }

  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/gm)]);
  checkForm = new FormControl();

  loginFormGroup = new FormGroup({
    email: this.email,
    password: this.password,
    checkForm: this.checkForm
  })

  login() {
    this.store.dispatch(new AuthActions.LoginStart({
      email: this.email.value as string,
      password: this.password.value as string
    }))
  }
}