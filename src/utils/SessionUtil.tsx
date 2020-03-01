import { TOKEN_KEY } from "./static";

export const setToken = (param:string) => {
    const token = param.substr(7,param.length);
    sessionStorage.setItem(TOKEN_KEY, token);
}

export const getToken = () => {
    return sessionStorage.getItem(TOKEN_KEY)
};