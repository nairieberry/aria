import merge from 'lodash/merge';

import {RECEIVE_ALL_SERVERS, RECEIVE_CURRENT_SERVER} from '../actions/server';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_SERVERS:
            return action.servers
        case RECEIVE_CURRENT_SERVER:
            newState = merge({}, state, {[action.server.id]: action.server})
        default:
            return state;
    }
};

export default serversReducer;