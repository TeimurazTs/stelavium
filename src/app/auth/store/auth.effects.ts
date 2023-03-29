import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, catchError, map, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { User } from "../user.model";

import * as AuthActions from './auth.actions'
import { Injectable } from "@angular/core";


@Injectable()
export class AuthEffects {
    authSignup = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.SIGNUP_START),
            switchMap((signupAction: AuthActions.SignupStart) => {
                console.log(signupAction.payload.name)
                return this.http
                    .post('https://fikra.admi.ge/api/User/CreateUser',
                        {
                            name: signupAction.payload.name,
                            lastname: signupAction.payload.lastname,
                            email: signupAction.payload.email,
                            password: signupAction.payload.password
                        }).pipe(
                            map((resData: any) => {
                                const user = new User(resData.email, resData.id, resData.token);
                                localStorage.setItem('userData', JSON.stringify(user));
                                return new AuthActions.AuthenticateSuccess({ resData })
                            }),
                            catchError(error => {
                                return of(new AuthActions.AuthenticateFail(error))
                            })
                        );
            })

        )
    })

    authLogin = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.LOGIN_START),
            switchMap((authData: AuthActions.LoginStart) => {
                return this.http
                    .post('https://fikra.admi.ge/api/User/Login',
                        {
                            email: authData.payload.email,
                            password: authData.payload.password
                        }).pipe(
                            map((resData: any) => {
                                const user = new User(resData.email, resData.id, resData.token);
                                localStorage.setItem('userData', JSON.stringify(user));
                                return new AuthActions.AuthenticateSuccess({ resData });
                            }),
                            catchError(error => {
                                return of(new AuthActions.AuthenticateFail(error))
                            })
                        );
            })
        )
    });

    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) { }
}