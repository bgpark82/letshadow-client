/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Button, ButtonGroup, Dialog } from 'thenextloop-uikit';

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
        title="로그인"
        cancelText="취소"
        visible={visible}
        onConfirm={onConfirm}
        onCancel={onCancel}
        cancelable
      >
        <ButtonGroup direction="column">
          <Button size="medium" width="100%">
            구글 로그인
          </Button>
          <Button size="medium" width="100%">
            페이스북 로그인
          </Button>
        </ButtonGroup>
      </Dialog>
    </div>
  );
}

export default NavProfile;
