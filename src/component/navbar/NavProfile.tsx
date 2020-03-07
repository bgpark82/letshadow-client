/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Button, ButtonGroup, Dialog } from 'thenextloop-uikit';

const buttonStyle = css`
  /* background-color: var(--main-color); */

  &:hover {
    /* background-color: var(--sub-color) !important; */
  }
`;

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
      >
        <DialogTitle>letshadow</DialogTitle>
        <DialogMessage>
          <span>Let's Shadow</span>에 오신 것을 환영합니다 🥳
        </DialogMessage>
        {/* <DialogSNSMessage>SNS계정으로 간편 로그인</DialogSNSMessage> */}
        <ButtonGroup direction="column">
          <Button size="large" theme="bordered" width="100%" css={buttonStyle}>
            구글 로그인
          </Button>
        </ButtonGroup>
      </Dialog>
    </div>
  );
}

export default NavProfile;
