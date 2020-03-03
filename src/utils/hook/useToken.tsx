import { useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { TOKEN_KEY } from './../static';


function useToken() {
    const [cookies, setCookie] = useCookies([TOKEN_KEY]);

    const setToken = useCallback(
        (param) => {
            const token = param.substr(7,param.length);
            setCookie(TOKEN_KEY, token)
        },
        [],
    )
    const token = cookies;
    return [token, setToken] as [
        typeof token, typeof setToken
    ]
}

export default useToken;