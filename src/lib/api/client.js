import axios from 'axios';
import { DEFAULT_SERVER_URL, TOKEN_KEY } from '../../static/static';

const client = axios.create();
client.defaults.baseURL = DEFAULT_SERVER_URL;


axios.interceptors.request.use(
  request =>{
    const token = localStorage.getItem(TOKEN_KEY);
    request.headers['Authorization'] = `Bearer ${token}`;
    return request;
  },
  error => {
    console.log('request error')
    return Promise.reject(error);
  },
)

axios.interceptors.response.use(
  response => {
    console.log(response.data)
    return response;
  },
  error => {
    console.log('response error')
    return Promise.reject(error);
  },
);

export default client;
