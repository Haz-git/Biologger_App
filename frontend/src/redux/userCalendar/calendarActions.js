import api from '../../api';
import {
    USER_ADD_EVENT,
    USER_GET_EVENTS,
    USER_UPDATE_EVENT,
    USER_DELETE_EVENT,
} from './calendarTypes';

export function addNewEvent(event) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        console.log(event);
    }
}