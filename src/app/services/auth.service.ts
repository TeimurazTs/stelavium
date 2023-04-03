import { Injectable } from '@angular/core';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../componenets/auth/store/auth.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environment.ts/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private store: Store<fromApp.AppState>,
    private http: HttpClient
  ) {}

  url = environment.url;

  dispatchLogin(username: string, password: string, remember: null | string) {
    const stateOfCheckMark = remember === null ? false : true;
    this.store.dispatch(
      new AuthActions.LoginStart({
        username: username,
        password: password,
        remember: stateOfCheckMark,
      })
    );
  }

  dispatchSignup(
    email: string,
    firstname: string,
    lastName: string,
    password: string,
    repeatPassword: string,
    roleId: string
  ) {
    this.store.dispatch(
      new AuthActions.SignupStart({
        firstName: firstname,
        lastName: lastName,
        email: email,
        password: password,
        repeatPassword: repeatPassword,
        roleId: roleId,
      })
    );
  }

  loginWithGoogle(credentials: string): Observable<any> {
    return this.http.post(`${this.url}User/ExternalLogin`, {
      provider: 'GOOGLE',
      accessToken: credentials,
    });
  }
}
