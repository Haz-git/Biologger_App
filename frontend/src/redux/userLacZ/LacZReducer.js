import {
    USER_ADD_PROTOCOL,
    USER_DELETE_PROTOCOL,
    USER_EDIT_NAME_PROTOCOL,
    USER_GET_PROTOCOL,
} from './LacZTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case USER_GET_PROTOCOL:
            return {...state, laczProtocol: action.payload};
        case USER_ADD_PROTOCOL:
            return {...state, laczProtocol: action.payload};
        case USER_DELETE_PROTOCOL:
            return {...state, laczProtocol: action.payload};
        case USER_EDIT_NAME_PROTOCOL:
            return {...state, laczProtocol: action.payload};
        default:
            return state;
    }
}