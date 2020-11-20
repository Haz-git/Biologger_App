import api from '../../api';
import {
    USER_ADD_BACTERIA,
    USER_DELETE_BACTERIA,
    USER_EDIT_NAME_BACTERIA,
    USER_GET_BACTERIA,
} from './LacZTypes';

export function getTasks() {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } }} } = getState();
        const response = await api.post('/users/scitools/lacz/get', { _id });

        dispatch({
            type: USER_GET_BACTERIA,
            payload: response.data.existingUserTaskList,
        })
    }
}

// export function addNewTask(data) {
//     return async (dispatch, getState) => {
//         const { auth: { userLogIn: { data: { _id } } } } = getState();

//         const response = await api.post(`/users/task`, {data, _id});

//         dispatch({
//             type: USER_NEW_TASK,
//             payload: response.data.userNewTaskList,
//         });
//     }
// }

// export function deleteTask(task) {
//     return async (dispatch, getState) => {
//         const { auth: { userLogIn: { data: { _id }}}} = getState();

//         const response = await api.post(`/users/task/delete`, {task, _id});

//         dispatch({
//             type: USER_DELETED_TASK,
//             payload: response.data.afterDeletionTaskList,
//         });
//     }
// }