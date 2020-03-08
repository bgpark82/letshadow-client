/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, ButtonGroup, Dialog } from 'thenextloop-uikit';
import { axiosInterceptor } from '../../service/UserService';
import apiClient from '../../utils/apiClient';
import { DEFAULT_SERVER_URL, OAUTH2_SERVER_URL, TOKEN_KEY } from '../../utils/static';
import ProfileImg from './ProfileImg';

const DialogTitle = styled.h1`
  font-family: 'Rouge Script', cursive;
  font-size: 2.5rem;
  text-align: center;
`;

const DialogMessage = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
  span {
    font-weight: 600;
    color: var(--main-color);
  }
`;
const DialogStyle = css`
  z-index: 300;
`;

function NavProfile() {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const param = qs.parse(location.search);
    const token = param['?token'];
    localStorage.setItem(TOKEN_KEY, token);
    axiosInterceptor();

    async function fetch() {
      const res = await apiClient.get(DEFAULT_SERVER_URL + '/user/me', { headers: { Authorization: 'Bearer ' + token } });
      setUser(res.data);
    }
    fetch();
  }, []);

  const onClick = () => {
    setVisible(true);
  };

  const onConfirm = () => {
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

  const onLink = () => {
    window.location.href = OAUTH2_SERVER_URL;
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      {user ? (
        <ProfileImg user={user}></ProfileImg>
      ) : (
        <Button theme="bordered" radius size="small" css={{ fontSize: '1rem', cursor: 'pointer' }} onClick={onClick}>
          로그인
        </Button>
      )}
      <Dialog cancelText="취소" visible={visible} onConfirm={onConfirm} onCancel={onCancel} cancelable css={DialogStyle}>
        <DialogTitle>letshadow</DialogTitle>
        <DialogMessage>
          <span>Let's Shadow</span>에 오신 것을 환영합니다 🥳
        </DialogMessage>
        <ButtonGroup direction="column">
          <Button size="large" theme="bordered" width="100%" onClick={onLink}>
            구글 로그인
          </Button>
        </ButtonGroup>
      </Dialog>
    </div>
  );
}

export default NavProfile;
