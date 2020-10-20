import { USER_LOG_IN } from '../userLogin/userLoginTypes';
import api from '../../api';

const userLogin = formValues => async dispatch => {
    //Send a POST request to api:
    const response = api.post('/users/login', {...formValues});

    //Dispatch response object to reducers:
    dispatch({
        type: USER_LOG_IN,
        payload: response,
    })

}

export default userLogin;