import {fetchAllChannels, fetchChannel, createChannel, deleteChannel} from '../utils/channel';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS'
export const RECEIVE_CURRENT_CHANNEL = 'RECEIVE_CURRENT_CHANNEL'

const receiveAllChannels = channels => ({
    type: RECEIVE_ALL_CHANNELS,
    channels
});

const receiveCurrentChannel = channel => ({
    type: RECEIVE_CURRENT_CHANNEL,
    channel
});

export const channelIndex = () => dispatch => fetchAllChannels()
    .then(channels => dispatch(receiveAllChannels(channels)));

export const showChannel = id => dispatch => fetchChannel(id)
    .then(channel => dispatch(receiveCurrentChannel(channel)));