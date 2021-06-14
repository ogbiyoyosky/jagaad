import axios from 'axios';

const apiRequest = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export default apiRequest;

