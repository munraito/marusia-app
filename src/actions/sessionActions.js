import * as types from './actionTypes'
import SessionApi from '../api/sessionApi'

export function loginSuccess() {
    return {type: types.LOGIN_SUCCESS}
}

export function logInUser(credentials) {
    return (dispatch) => {
        return SessionApi.login(credentials).then(response => {
            sessionStorage.setItem('access_token', response.access_token);
            sessionStorage.setItem('refresh_token', response.refresh_token);
            dispatch(loginSuccess());
        }).catch(error => {
            alert(error);
        });
    };
}

export function logOutUser() {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    return {type: types.LOG_OUT}
}
