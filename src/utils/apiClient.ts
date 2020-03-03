import axios from 'axios';
import { DEFAULT_SERVER_URL } from './static';

const host = DEFAULT_SERVER_URL;
const apiClient = axios.create({
    baseURL:host,
    withCredentials:true
})
export default apiClient;

