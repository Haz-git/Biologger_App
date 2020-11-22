import api from '../../api';
import {
    USER_ADD_BACTERIA,
    USER_DELETE_BACTERIA,
    USER_EDIT_NAME_BACTERIA,
    USER_GET_BACTERIA,
} from './LacZTypes';

export function getStrains() {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } }} } = getState();

        const response = await api.post('/users/scitools/lacz/get', { _id });

        dispatch({
            type: USER_GET_BACTERIA,
            payload: response.data.strainList,
        })
    }
}

export function addNewStrains(strainName) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        const response = await api.post(`/users/scitools/lacz/add`, {strainName, _id});

        console.log(response);

        dispatch({
            type: USER_ADD_BACTERIA,
            payload: response.data.strainList,
        });
    }
}

export function editStrainName(newStrainName, currentStrainId) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        const response = await api.patch(`/users/scitools/lacz/edit`, {newStrainName, currentStrainId, _id});

        dispatch({
            type: USER_EDIT_NAME_BACTERIA,
            payload: response.data.strainList,
        });

    }
}

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