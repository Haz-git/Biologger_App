import api from '../../api';
import { USER_NEW_TASK, USER_GET_TASKS } from './userTaskLogTypes';

export function addNewTask(data) {
    return async dispatch => {
        const response = await api.post(`/users/task`, {...data});

        console.log('Response from server on newTaskAdd' + response);

        dispatch({
            type: USER_NEW_TASK,
            payload: response
        });
    }
}