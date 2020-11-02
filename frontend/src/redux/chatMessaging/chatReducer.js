import { USER_CHAT_REQUEST } from './chatTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case USER_CHAT_REQUEST:
            return {...state, chatLogs: action.payload }
        default:
            return state;
    }
}