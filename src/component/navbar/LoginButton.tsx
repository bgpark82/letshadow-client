import { css } from '@emotion/core';
import React from 'react';
import { Button } from 'thenextloop-uikit';
import { CURRENT_USER } from '../../static/static';
import ProfileImg from './ProfileImg';

const buttonStyle = css`
  font-size: 1rem;
  cursor: pointer;
`;

function LoginButton({ onClick }: any) {
  const currentUser = localStorage.getItem(CURRENT_USER);
  let user;
  if (currentUser !== null) user = JSON.parse(currentUser);

  return (
    <>
      {user === null || user === undefined ? (
        <Button theme="bordered" radius size="small" onClick={onClick} css={buttonStyle}>
          로그인
        </Button>
      ) : (
        <ProfileImg user={user}></ProfileImg>
      )}
    </>
  );
}

export default LoginButton;
