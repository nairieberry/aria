import {postUser, postSession, deleteSession} from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const register = user => dispatch => postUser(user)
    .then(user => dispatch(receiveCurrentUser(user)));

export const login = user => dispatch => postSession(user)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));