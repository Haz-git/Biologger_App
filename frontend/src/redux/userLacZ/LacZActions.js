import api from '../../api';
import {
    USER_ADD_PROTOCOL,
    USER_DELETE_PROTOCOL,
    USER_EDIT_NAME_PROTOCOL,
    USER_GET_PROTOCOL,
} from './LacZTypes';

export function getProtocols() {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } }} } = getState();

        const response = await api.post('/users/scitools/lacz/get', { _id });

        dispatch({
            type: USER_GET_PROTOCOL,
            payload: response.data.laczAssayProtocols,
        })
    }
}

export function addNewProtocols(protocolName) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        const response = await api.post(`/users/scitools/lacz/add`, { protocolName, _id });

        console.log(response);

        dispatch({
            type: USER_ADD_PROTOCOL,
            payload: response.data.laczAssayProtocols,
        });
    }
}

export function editProtocolName(newProtocolName, currentProtocolId) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        const response = await api.patch(`/users/scitools/lacz/edit`, {newProtocolName, currentProtocolId, _id});

        dispatch({
            type: USER_EDIT_NAME_PROTOCOL,
            payload: response.data.laczAssayProtocols,
        });

    }
}

export function deleteProtocol(currentProtocolId) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        const response = await api.post(`/users/scitools/lacz/delete`, {currentProtocolId, _id});

        console.log(response);

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