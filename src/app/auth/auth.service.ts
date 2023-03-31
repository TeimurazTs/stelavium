import { Injectable } from '@angular/core';
import * as fromApp from '../store/app.reducer'
import * as AuthActions from './store/auth.actions'
import { Store } from '@ngrx/store'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  dispatchLogin(username: string, password: string, remember: null | string) {
    const stateOfCheckMark = remember === null ? false : true;
    this.store.dispatch(new AuthActions.LoginStart({
      username: username,
      password: password,
      remember: stateOfCheckMark,
    }))
  }

  dispatchSignup(email: string, firstname: string, lastName: string, password: string, repeatPassword: string, roleId: string,) {
    this.store.dispatch(new AuthActions.SignupStart({
      firstName: firstname,
      lastName: lastName,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
      roleId: roleId
    }))
  }
}
