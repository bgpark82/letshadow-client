/** @jsx jsx */
import { jsx } from '@emotion/core';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { axiosInterceptor } from '../../service/UserService';
import { CURRENT_USER, DEFAULT_SERVER_URL, TOKEN_KEY } from '../../static/static';
import apiClient from '../../utils/apiClient';
import LoginButton from './LoginButton';
import LoginDialog from './LoginDialog';

function NavProfile() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const param = qs.parse(location.search);
    const token = param['?token'];
    if (token) localStorage.setItem(TOKEN_KEY, token);

    async function fetch() {
      const res = await apiClient.get(DEFAULT_SERVER_URL + '/user/me', {
        headers: { Authorization: 'Bearer ' + token },
      });
      const user = res.data;
      localStorage.setItem(CURRENT_USER, JSON.stringify(user));
      history.push('/');
      axiosInterceptor();
    }
    fetch();
  }, []);

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
