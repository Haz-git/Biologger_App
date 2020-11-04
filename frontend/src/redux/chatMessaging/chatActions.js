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
        const { chat } = getState();
        //grabbing chat state and concating prior to dispatch to reducer. This doesn't seem to be the problem.
        console.log(chat);
        console.log(chat.chatLogs.data.data.chats);
        const newChatLog = {...chat.chatLogs};
        console.log('This is the newChatLog object', newChatLog);
        newChatLog.data.data.chats.concat(data);
        console.log('After Appending: ', newChatLog)

        //I need to figure out a way to remove chatLog, because when appending to reducer it has chatLog nested twice...

        //Testing old way:

        dispatch({
            type: USER_CHAT_RECEIVED,
            payload: newChatLog,
        });
    }
}