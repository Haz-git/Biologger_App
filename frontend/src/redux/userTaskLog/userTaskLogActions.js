import api from '../../api';
import { USER_NEW_TASK, USER_GET_TASKS } from './userTaskLogTypes';

export function addNewTask(data) {
    return async dispatch => {
        const response = await api.post(`/users/task`, {...data});

        console.log(response);
    }
}