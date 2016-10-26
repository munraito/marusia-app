import { combineReducers } from 'redux'
import session from './sessionReducer'
//import brands from './brandReducer'

const rootReducer = combineReducers({
    session
});

export default rootReducer;