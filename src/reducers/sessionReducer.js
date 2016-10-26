import * as types from '../actions/actionTypes'
import initialState from './initialState';
import { browserHistory } from 'react-router';

export default function sessionReducer(state = initialState.session, action) {
    console.log(action.type);
    console.log('sessionReducer reached');
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            console.log('LOGIN_SUCCESS reached');
            browserHistory.push('/');
            return !!sessionStorage.jwt;
        case types.LOG_OUT:
            browserHistory.push('/login');
            return !!sessionStorage.jwt;
        default:
            console.log(state);
            return state;
    }
}