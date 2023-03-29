import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer'
import * as AuthActions from '../store/auth.actions'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private store: Store<fromApp.AppState>) { }

  name = new FormControl('', [Validators.required, Validators.min(3)]);
  lastname = new FormControl('', [Validators.required, Validators.min(3)])
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/gm)])
  repeatPassword = new FormControl('', [Validators.required])
  termCheck = new FormControl();

  registerForm = new FormGroup({
    name: this.name,
    lastname: this.lastname,
    email: this.email,
    password: this.password,
    repeatPassword: this.password,
    termCheck: this.termCheck
  })

  signup() {
    this.store.dispatch(new AuthActions.SignupStart({
      name: this.name.value,
      lastname: this.lastname.value,
      email: this.email.value,
      password: this.password.value,
    }))
  }
}
