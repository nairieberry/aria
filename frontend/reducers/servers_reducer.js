import merge from 'lodash/merge';

import {RECEIVE_ALL_SERVERS, RECEIVE_CURRENT_SERVER, DELETE_CURRENT_SERVER} from '../actions/server';

const _nullServer = {
    server: null,
};

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_SERVERS:
            return action.servers
        case RECEIVE_CURRENT_SERVER:
            // const newState = merge({}, state, {[action.server.id]: action.server})
            const newState = merge({}, state, action.server)
            return newState;
        case DELETE_CURRENT_SERVER:
            return _nullServer;
        default:
            return state;
    }
};

export default serversReducer;