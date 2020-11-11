import api from '../../api';
import {
    USER_ADD_BIONOTE,
    USER_DELETE_BIONOTE,
    USER_UPDATE_BIONOTE,
} from './bionoteTypes';

export function createNewBioNote(data) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        const response = await api.post('/user/bionote/create', {_id, data});
        console.log(response);
    }
}