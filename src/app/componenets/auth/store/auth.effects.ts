import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, catchError, map, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { User } from "../../../shared/models/user.model";

import * as AuthActions from './auth.actions'
import { Injectable } from "@angular/core";
import { environment } from "src/environment.ts/environment";


@Injectable()
export class AuthEffects {
    authSignup = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.SIGNUP_START),
            switchMap((signupAction: AuthActions.SignupStart) => {
                console.log(signupAction.payload)
                return this.http
                    .post(`${environment.url}User/CreateUser`,
                        {
                            firstName: signupAction.payload.firstName,
                            lastName: signupAction.payload.lastName,
                            email: signupAction.payload.email,
                            password: signupAction.payload.password,
                            repeatPassword: signupAction.payload.repeatPassword,
                            roleId: 'cb3c281d-fc5e-4d77-8129-8b90954f755d',
                        }).pipe(
                            map((resData: any) => {
                                if (!resData.success) {
                                    return new AuthActions.AuthenticateFail(resData.errors[0].message)
                                }
                                const user = new User(resData.data.token);
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
                    .post(`${environment.url}/User/Login`,
                        {
                            username: authData.payload.username,
                            password: authData.payload.password,
                            remember: authData.payload.remember
                        }).pipe(
                            map((resData: any) => {
                                if (!resData.success) {
                                    return new AuthActions.AuthenticateFail(resData.errors[0].message)
                                }
                                const user = new User(resData.data.token);
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