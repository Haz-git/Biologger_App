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

// export const updateStateAfterNewMessage = msg => {

//     return {
//         type: USER_CHAT_RECEIVED,
//         payload: msg,
//     }
// }

export function updateStateAfterNewMessage(data) {
    return (dispatch, getState) => {
        //Is this chat or chatLogs?
        const { chat } = getState();

        console.log(chat);
        console.log(chat.chatLogs.data.data.chats);
        console.log(chat.chatLogs.data.data.chats.concat(data));

        dispatch({
            type: USER_CHAT_RECEIVED,
            payload: chat.chatLogs.data.data.chats.concat(data),
        })
    }
}