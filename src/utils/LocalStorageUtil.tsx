import { TOKEN_KEY } from "./static";


export const setToken = (param:string) => {
    const token = param.substr(7,param.length);
    localStorage.setItem(TOKEN_KEY, token);
}

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY)
};