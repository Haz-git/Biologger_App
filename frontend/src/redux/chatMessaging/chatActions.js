import api from '../../api';
import { USER_CHAT_REQUEST } from './chatTypes';

const restoreChats = async dispatch => {
    const request = await api.get(`/users/chats`);

    dispatch({
        type: USER_CHAT_REQUEST,
        payload: request,
    })

}

export default restoreChats;