import { css } from '@emotion/core';
import React from 'react';
import { Button } from 'thenextloop-uikit';
import ProfileImg from './ProfileImg';

const buttonStyle = css`
  font-size: 1rem;
  cursor: pointer;
`;

function LoginButton({ user, onClick }: any) {
  return (
    <>
      {user ? (
        <ProfileImg user={user}></ProfileImg>
      ) : (
        <Button theme="bordered" radius size="small" onClick={onClick} css={buttonStyle}>
          로그인
        </Button>
      )}
    </>
  );
}

export default LoginButton;
