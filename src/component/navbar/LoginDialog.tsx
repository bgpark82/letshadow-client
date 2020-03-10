import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Button, ButtonGroup, Dialog } from 'thenextloop-uikit';
import { OAUTH2_SERVER_URL } from '../../static/static';

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

function LoginDialog({ visible, onConfirm, onCancel }: any) {
  const onLink = () => {
    window.location.href = OAUTH2_SERVER_URL;
  };

  return (
    <Dialog
      cancelText="취소"
      visible={visible}
      onConfirm={onConfirm}
      onCancel={onCancel}
      cancelable
      css={DialogStyle}
    >
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
  );
}

export default LoginDialog;
