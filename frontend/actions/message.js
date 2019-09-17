import {fetchAllMessages, createMessage, updateMessage, deleteMessage} from '../utils/message';

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES'
export const RECEIVE_CURRENT_MESSAGE = 'RECIEVE_CURRENT_MESSAGE'
export const DELETE_CURRENT_MESSAGE = 'DELETE_CURRENT_MESSAGE'

const receiveAllMessages = ({messages, users}) => ({
    // takes in your payload object as an argument, and looks inside the object for a key of messages and users
    type: RECEIVE_ALL_MESSAGES,
    messages,
    users,
});

const receiveCurrentMessage = message => ({
    type: RECEIVE_CURRENT_MESSAGE,
    message
});

const deleteCurrentMessage = () => ({
    type: DELETE_CURRENT_MESSAGE,
});

export const messageIndex = () => dispatch => fetchAllMessages()
    .then(payload => dispatch(receiveAllMessages(payload)));
// you're sending back messages and users

export const newMessage = message => dispatch => createMessage(message)
    .then(message => dispatch(receiveCurrentMessage(message)));

export const editMessage = message => dispatch => updateMessage(message)
    .then(message => dispatch(receiveCurrentMessage(message)));

export const removeMessage = () => dispatch => deleteMessage()
    .then(() => dispatch(deleteCurrentMessage()));