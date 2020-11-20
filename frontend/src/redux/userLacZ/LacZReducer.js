import {
    USER_ADD_BACTERIA,
    USER_DELETE_BACTERIA,
    USER_EDIT_NAME_BACTERIA,
    USER_GET_BACTERIA,
} from './LacZTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case USER_GET_BACTERIA:
            return {...state, laczBacteria: action.payload};
        case USER_ADD_BACTERIA:
            return {...state, laczBacteria: action.payload};
        case USER_DELETE_BACTERIA:
            return {...state, laczBacteria: action.payload};
        case USER_EDIT_NAME_BACTERIA:
            return {...state, laczBacteria: action.payload};
        default:
            return state;
    }
}