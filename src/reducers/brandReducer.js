import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function brandReducer(state = initialState.brands, action) {
    switch(action.type) {
        case types.LOAD_BRANDS_SUCCESS:
            return {...state, brands: action.brands};
        default:
            return state;
    }
}