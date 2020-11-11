import api from '../../api';
import {
    USER_ADD_BIONOTE,
    USER_DELETE_BIONOTE,
    USER_UPDATE_BIONOTE,
    USER_GET_BIONOTES,
} from './bionoteTypes';
import history from '../../historyObject';

export function createNewBioNote(bioName, data) {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        const response = await api.post('/users/bionote/create', { _id, bioName, data });

        dispatch({
            type: USER_ADD_BIONOTE,
            payload: response.data.userNewBioNotesCollection.bionotes,
        })

        history.push('/createbionote');
    }
}

export function getBioNotes() {
    return async (dispatch, getState) => {
        const { auth: { userLogIn: { data: { _id } } } } = getState();

        const response = await api.post('/users/bionote/load', { _id });

        dispatch({
            type: USER_GET_BIONOTES,
            payload: response.data.userExistingBioNotesCollection.bionotes,
        })
    } 
}