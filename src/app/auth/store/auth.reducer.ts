import * as AuthActions from "./auth.actions";
import { User } from '../user.model'
import { Action } from "@ngrx/store";

export interface State {
    user: User | null,
}

const initialState: State = {
    user: null,
}

export function authReducer(state = initialState, action: Action) {
    switch (action.type) {
        case AuthActions.AUTHENTICATE_SUCCESS:
            const user: User = {
                token: (action as AuthActions.AuthenticateSuccess).payload.token,
            }
            return {
                ...state,
                authError: null,
                user: user

            }
        case AuthActions.LOGOUT:
            return {
                ...state
            }
        case AuthActions.LOGIN_START:
            return {
                ...state,
                authError: null,
                loading: true,
            }
        case AuthActions.AUTHENTICATE_FAIL:
            return {
                ...state,
                user: null,
                authError: (action as AuthActions.AuthenticateFail).payload,
            }
        default:
            return {
                ...state
            }
    }
}