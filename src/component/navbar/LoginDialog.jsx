import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Dialog } from 'thenextloop-uikit';
import { changeField, initializeForm } from '../../modules/auth';
import { OAUTH2_SERVER_URL } from '../../static/static';
import { gray } from '../../utils/theme';

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

const DialogInput = styled.div`
  input {
    background-color: white;
    border: 1px solid ${gray.sub};
    padding: 0.5rem 1rem;
  }
  input + input {
    margin-left: 0.5rem;
  }
`;

const DialogStyle = css`
  z-index: 300;
`;

function LoginDialog({ visible, onConfirm, onCancel }) {
  const dispatch = useDispatch();
  const form = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(initializeForm());
  }, []);
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(changeField({ name, value }));
  };

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
        <DialogInput>
          <input type="text" name="username" value={form.username} onChange={onChange} />
          <input type="password" name="password" value={form.password} onChange={onChange} />
        </DialogInput>
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
