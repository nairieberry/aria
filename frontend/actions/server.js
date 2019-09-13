import {fetchAllServers, fetchServer, createServer, updateServer} from '../utils/server';

export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS'
export const RECEIVE_CURRENT_SERVER = 'RECEIVE_CURRENT_SERVER'

const receiveAllServers = servers => ({
    type: RECEIVE_ALL_SERVERS,
    servers
});

const receiveCurrentServer = server => ({
    type: RECEIVE_CURRENT_SERVER,
    server
});

export const serverIndex = () => dispatch => fetchAllServers()
    .then(servers => dispatch(receiveAllServers(servers)));

export const showServer = id => dispatch => fetchServer(id)
    .then(server => dispatch(receiveCurrentServer(server)));

export const newServer = server => dispatch => createServer(server)
    .then(server => dispatch(receiveCurrentServer(server)));

export const editServer = server => dispatch => updateServer(server)
    .then(server => dispatch(receiveCurrentServer(server)));