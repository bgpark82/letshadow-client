/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Button, ButtonGroup, Dialog } from 'thenextloop-uikit';

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

  const onClick = () => {
    setVisible(true);
  };

  const onConfirm = () => {
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button
        theme="bordered"
        radius
        size="small"
        css={{ fontSize: '1rem', cursor: 'pointer' }}
        onClick={onClick}
      >
        로그인
      </Button>
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
          <Button size="large" theme="bordered" width="100%">
            구글 로그인
          </Button>
        </ButtonGroup>
      </Dialog>
    </div>
  );
}

export default NavProfile;
