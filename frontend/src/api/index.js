import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:8080/api',
    baseURL: 'https://petri-webapp-heroku.herokuapp.com/',
    withCredentials: true,
});