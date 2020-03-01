import axios from 'axios';
import { getToken } from '../utils/LocalStorageUtil';
import { DEFAULT_SERVER_URL } from '../utils/static';



export const getUser = async () => {
    try {
        const url = DEFAULT_SERVER_URL + '/user/me'
        const res = await axios.get(url)
        return res.data
    } catch(e){
        console.log(e)
    }
}

export const axiosInterceptor = () => {
    axios.interceptors.request.use(config =>{
        config.headers.authorization = 'Bearer ' + getToken()
        return config;
    })
}