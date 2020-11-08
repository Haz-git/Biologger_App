import api from '../../api';
import { USER_NEW_TASK, USER_GET_TASKS } from './userTaskLogTypes';

export function getTasks() {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } }} } = getState();
        const response = await api.post('/users/getTasks', { _id });

        console.log('Response from server for all tasks' + JSON.stringify(response));

        dispatch({
            type: USER_GET_TASKS,
            payload: response.data.existingUserTaskList,
        })
    }
}

export function addNewTask(data) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        const response = await api.post(`/users/task`, {data, _id});

        console.log('Response from server on newTaskAdd ' + JSON.stringify(response));

        dispatch({
            type: USER_NEW_TASK,
            payload: response.data.userNewTaskList,
        });
    }
}

export function deleteTask(task) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id }}}} = getState();

        const response = await api.post(`/users/task/delete`, {task, _id});

        console.log('Response from server on deleteTask ' + JSON.stringify(response.data))
    }
}
