import axios from 'axios';


function Interceptor(token:any) {
    axios.interceptors.request.use(config =>{
        config.headers.authorization = 'Bearer ' + token
        return config;
    })
}

export default Interceptor;