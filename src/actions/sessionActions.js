import * as types from './actionTypes'
import SessionApi from '../api/sessionApi'

export function loginSuccess() {
    console.log('login success');
    return {type: types.LOGIN_SUCCESS}
}

export function logInUser(credentials) {
    return (dispatch) => {
        return SessionApi.login(credentials).then(response => {
            sessionStorage.setItem('jwt', response.access_token);
            sessionStorage.setItem('jwt_refresh', response.refresh_token);
            dispatch(loginSuccess());
        }).catch(error => {
            throw(error);
        });
    };
}

export function logOutUser() {
    sessionStorage.removeItem('jwt');
    return {type: types.LOG_OUT}
}
