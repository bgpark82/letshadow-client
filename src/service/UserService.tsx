import axios from 'axios';
import { DEFAULT_SERVER_URL, TOKEN_KEY } from '../utils/static';

export const getUser = async () => {
  try {
    const url = DEFAULT_SERVER_URL + '/user/me';
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const axiosInterceptor = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  axios.interceptors.request.use(config => {
    config.headers.authorization = 'Bearer ' + token;
    return config;
  });
};
