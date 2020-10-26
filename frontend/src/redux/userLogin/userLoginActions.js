import { USER_LOG_IN } from '../userLogin/userLoginTypes';
import history from '../../historyObject';
import api from '../../api';

const userLogin = (formValues, callback) => async dispatch => {
    //Send a POST request to api:
    const response = await api.post('/users/login', {...formValues});

    //Store JWT in response into localstorage:
    localStorage.setItem('jwt', response.data.token);

    //Dispatch response object to reducers:
    dispatch({
        type: USER_LOG_IN,
        payload: response.data,
    })

    history.push('/dashboard');

}

export default userLogin;