import {RECEIVE_CURRENT_USER} from '../actions/session';
import { RECEIVE_ALL_MESSAGES } from '../actions/message';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user});
        case RECEIVE_ALL_MESSAGES:
            // debugger
            return Object.assign({}, state, action.users);
        default:
            return state;
    }
};

export default usersReducer;