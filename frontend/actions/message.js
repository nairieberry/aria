import {fetchAllMessages, createMessage, updateMessage, deleteMessage} from '../utils/message';

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES'
export const RECEIVE_CURRENT_MESSAGE = 'RECIEVE_CURRENT_MESSAGE'
export const DELETE_CURRENT_MESSAGE = 'DELETE_CURRENT_MESSAGE'

const receiveAllMessages = messages => ({
    type: RECEIVE_ALL_MESSAGES,
    messages
});

const receiveCurrentMessage = message => ({
    type: RECEIVE_CURRENT_MESSAGE,
    message
});

const deleteCurrentMessage = () => ({
    type: DELETE_CURRENT_MESSAGE,
});

export const messageIndex = () => dispatch => fetchAllMessages()
    .then(messages => dispatch(receiveAllMessages(messages)));

export const newMessage = message => dispatch => createMessage(message)
    .then(message => dispatch(receiveCurrentMessage(message)));

export const editMessage = message => dispatch => updateMessage(message)
    .then(message => dispatch(receiveCurrentMessage(message)));

export const removeMessage = () => dispatch => deleteMessage()
    .then(() => dispatch(deleteCurrentMessage()));