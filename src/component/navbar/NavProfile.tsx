/** @jsx jsx */
import { jsx } from '@emotion/core';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { axiosInterceptor } from '../../service/UserService';
import apiClient from '../../utils/apiClient';
import { CURRENT_USER, DEFAULT_SERVER_URL, TOKEN_KEY } from '../../utils/static';
import LoginButton from './LoginButton';
import LoginDialog from './LoginDialog';

function NavProfile() {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const param = qs.parse(location.search);
    const token = param['?token'];
    localStorage.setItem(TOKEN_KEY, token);

    async function fetch() {
      const res = await apiClient.get(DEFAULT_SERVER_URL + '/user/me', {
        headers: { Authorization: 'Bearer ' + token },
      });
      const user = res.data;
      localStorage.setItem(CURRENT_USER, user);
      setUser(user);
      axiosInterceptor();
    }
    fetch();
    history.push('/');
  }, []);

  const onClick = () => setVisible(true);
  const onConfirm = () => setVisible(false);
  const onCancel = () => setVisible(false);

  return (
    <div>
      <LoginButton user={user} onClick={onClick} />
      <LoginDialog visible={visible} onConfirm={onConfirm} onCancel={onCancel} />
    </div>
  );
}

export default NavProfile;
