/** @jsx jsx */
import { jsx } from '@emotion/core';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { check, isUserLogin } from '../../modules/user';
import { CURRENT_USER, TOKEN_KEY } from '../../static/static';
import LoginButton from './LoginButton';
import LoginDialog from './LoginDialog';

function NavProfile() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, authError } = useSelector(state => ({
    user: state.user.user,
    authError: state.auth.authError,
  }));

  useEffect(()=>{
    if(user && !localStorage.getItem(CURRENT_USER) ){
        localStorage.setItem(CURRENT_USER, JSON.stringify(user));
        history.push('/');   
     }
  },[user])

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }

    const param = qs.parse(location.search);
    const token = param['?token'];
    if (token){
       localStorage.setItem(TOKEN_KEY, token);
       dispatch(check(token));
    }
   
  }, [dispatch]);

  const onClick = () => setVisible(true);
  const onConfirm = () => setVisible(false);
  const onCancel = () => setVisible(false);

  return (
    <div>
      <LoginButton onClick={onClick} />
      <LoginDialog visible={visible} onConfirm={onConfirm} onCancel={onCancel} />
    </div>
  );
}

export default NavProfile;
