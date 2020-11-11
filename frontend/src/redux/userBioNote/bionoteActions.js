import api from '../../api';
import {
    USER_ADD_BIONOTE,
    USER_DELETE_BIONOTE,
    USER_UPDATE_BIONOTE,
} from './bionoteTypes';

export function createNewBioNote(bioName, data) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        const response = await api.post('/users/bionote/create', { _id, bioName, data });
        console.log(response);
    }
}