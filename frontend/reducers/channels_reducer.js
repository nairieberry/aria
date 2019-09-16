import merge from 'lodash/merge';

import {RECEIVE_ALL_CHANNELS, RECEIVE_CURRENT_CHANNEL} from '../actions/channel';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_CHANNELS:
            return action.channels
        case RECEIVE_CURRENT_CHANNEL:
            const newState = merge({}, state, action.channel)
            return newState;
        default:
            return state;
    }
};

export default channelsReducer;