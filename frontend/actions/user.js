import {getUser} from '../utils/session'

export const RECEIVE_USER = "RECEIVE_USER"

const receiveUser = user => ({
    type: RECEIVE_USER,
    user,
});

export const fetchUser = userId => dispatch => getUser(userId)
    .then(user => dispatch(receiveUser(user)));