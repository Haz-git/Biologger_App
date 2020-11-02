import api from '../../api';
import { USER_CHAT_REQUEST } from './chatTypes';

export default function restoreChats() {
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