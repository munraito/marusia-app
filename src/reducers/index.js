import { combineReducers } from 'redux'
import session from './sessionReducer'
//import brands from './brandReducer'

export const rootReducer = combineReducers({
    session
});
