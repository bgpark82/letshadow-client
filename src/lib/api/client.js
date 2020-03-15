import axios from 'axios';
import { DEFAULT_SERVER_URL, TOKEN_KEY } from '../../static/static';

const client = axios.create();

const token = localStorage.getItem(TOKEN_KEY);
console.log('token ' + token);
if (token) client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
client.defaults.baseURL = DEFAULT_SERVER_URL;

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default client;
