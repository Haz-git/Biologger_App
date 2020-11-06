import { USER_NEW_TASK, USER_GET_TASKS } from './userTaskLogTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case USER_NEW_TASK:
            return {...state, Tasks: action.payload};
        case USER_GET_TASKS:
            return {...state, Tasks: action.payload};
        default:
            return state;
    }
}