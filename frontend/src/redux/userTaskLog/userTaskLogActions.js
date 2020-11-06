import api from '../../api';
import { USER_NEW_TASK, USER_GET_TASKS } from './userTaskLogTypes';

export function getTasks() {
    return async (dispatch) => {
        const response = await api.get('/users/task');

        console.log('Response from server for all tasks' + response);

        dispatch({
            type: USER_GET_TASKS,
            payload: response.data
        })
    }
}

export function addNewTask(data) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } }} } = getState();

        const response = await api.post(`/users/task`, {data, _id});

        console.log('Response from server on newTaskAdd ' + JSON.stringify(response));

        dispatch({
            type: USER_NEW_TASK,
            payload: response
        });
    }
}