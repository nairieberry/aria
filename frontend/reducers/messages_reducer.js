import merge from 'lodash/merge';

import {RECEIVE_ALL_MESSAGES, RECEIVE_CURRENT_MESSAGE, DELETE_CURRENT_MESSAGE} from '../actions/message';

const _nullMessage = {
    message: null,
};

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_MESSAGES:
            return action.messages
        case RECEIVE_CURRENT_MESSAGE:
            // debugger
            const newState = merge({}, state, action.message)
            return newState;
        case DELETE_CURRENT_MESSAGE:
            return _nullMessage
        default:
            return state;
    }
};

export default messagesReducer;