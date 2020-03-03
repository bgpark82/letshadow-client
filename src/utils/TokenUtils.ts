import { useCookies } from 'react-cookie';
import { TOKEN_KEY } from './static';



const [cookies, setCookie] = useCookies([TOKEN_KEY]);

export function setToken(param:string) {

    const token = param.substr(7,param.length);
    setCookie(TOKEN_KEY,token)
}

export function getToken(){
    return cookies;
}