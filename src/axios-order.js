/* eslint-disable eol-last */
/* eslint-disable indent */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-79516.firebaseio.com/',
});
export default instance;