import axios from 'axios';
import { USER_GET_NEWS } from './sciNewsTypes';

export function getNews() {
    return async dispatch => {

        const response = await axios.get('https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=3c9c2e2fa85142fb957890523a2bc4fc')
        //Trying to use this newsapi package in react...doesn't seem to work and only works in node... maybe time to use axios.get directly in this action creator. Make sure to remove the node module from package ...

        // const response = await newsApi.get('/top-headlines?country=us&category=science');

        console.log('Response from server for getNews' + JSON.stringify(response));

        dispatch({
            type: USER_GET_NEWS,
            payload: response,
        })
    }
}