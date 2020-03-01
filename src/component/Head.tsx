import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Header } from 'thenextloop-uikit';
import { axiosInterceptor, getUser } from '../service/UserService';
import { setToken } from '../utils/LocalStorageUtil';
import { OAUTH2_SERVER_URL } from '../utils/static';


interface User {
    id: number,
    email:string,
    name:string,
    picture:string
}

function Head() {
    const location = useLocation();
    const history = useHistory();
    const [user, setUser] = useState<User>({
        id:0,
        name:'',
        email:'',
        picture:''
    })
    

    useEffect(() => {
        setToken(location.search);
        axiosInterceptor();
        const fetchData = async() =>{
            const res = await getUser()
            if(res) setUser(res);
        }
        fetchData();
    },[])    

    const onClickLogo= () => {
        history.push('/')
    }
 
    const onClickButton = () => {
        window.location.href=OAUTH2_SERVER_URL;
    }

    const onClickItem = () => {
        history.push('/register')
    }

    const headerList = [
        {
            name:'shadow',
            text:'쉐도잉'
        },
        {
            name:'board',
            text:'게시판'
        }
    ]

    return (
        <div>
            {user.id !== 0 ?
            <Header 
                header={headerList}
                profileUrl={user.picture}
                onClickItem={onClickItem}
                onClickLogo={onClickLogo}
                hideButton/>
                
            : <Header 
                header={headerList} 
                onClickItem={onClickItem}
                onClickButton={onClickButton}
                onClickLogo={onClickLogo}
                hideProfile/>
            }
        </div>
    )
}

export default Head
