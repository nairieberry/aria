import {combineReducers} from 'redux';
import sessionReducer from './session';
import usersReducer from './users_reducer';

export default combineReducers({
    users: usersReducer,
    session: sessionReducer,
});