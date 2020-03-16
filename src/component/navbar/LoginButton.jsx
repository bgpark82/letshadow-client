import { css } from '@emotion/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'thenextloop-uikit';
import ProfileImg from './ProfileImg';

const buttonStyle = css`
  font-size: 1rem;
  cursor: pointer;
`;

function LoginButton({ onClick }) {
  const {user} = useSelector(state => ({user: state.user.user}));
console.log("user : " +user);
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
