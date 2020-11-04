import api from '../../api';
import { USER_CHAT_REQUEST, USER_CHAT_RECEIVED } from './chatTypes';

export function restoreChats() {
    return async dispatch => {

        const response = await api.get(`/users/chats`);

        if (response) {
            dispatch({
                type: USER_CHAT_REQUEST,
                payload: response
            });
        } else {
            return null;
        }
    }
}


export function updateStateAfterNewMessage(data) {
    return (dispatch, getState) => {
        const { chat } = getState();

        const newChatLog = {...chat.chatLogs};
        newChatLog.data.data.chats = newChatLog.data.data.chats.concat(data);
        console.log('After Appending: ', newChatLog)

        dispatch({
            type: USER_CHAT_RECEIVED,
            payload: newChatLog,
        });
    }
}