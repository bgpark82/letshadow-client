import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { gray } from '../../utils/theme';

const Profile = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
  display: inline-block;
`;

const DropDownMenu = styled(animated.div)`
  position: absolute;
  background-color: white;
  right: 0.5rem;
  z-index: 250;
  min-width: 10rem;
  font-weight: 700;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
  font-size: 1rem;
`;

const MenuItem = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 1rem;
  color: ${gray.main};
  cursor: pointer;
  &:hover {
    background-color: ${gray.light};
  }

  & + & {
    padding-top: 0.5rem;
  }
`;

function ProfileImg({ user }: any) {
  const [toggle, setToggle] = useState(true);
  const { transform, opacity } = useSpring({
    from: { transform: 'translateY(-13rem) scale(0)', opacity: 0 },
    transform: toggle ? 'translateY(0rem) scale(1)' : 'translateY(-13rem) scale(0)',
    opacity: toggle ? 1 : 0,

    config: {
      tension: 400,
      friction: 26,
    },
  });
  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Profile src={user.picture} alt="profile" onClick={onToggle} />

      <DropDownMenu
        style={{
          transform: transform.interpolate(transform => transform),
          opacity: opacity.interpolate(opacity => opacity),
        }}
      >
        <MenuItem to="">개인정보 변경</MenuItem>
        <MenuItem to="">나의 쉐도우</MenuItem>
        <MenuItem to="">로그아웃</MenuItem>
      </DropDownMenu>
    </>
  );
}

export default ProfileImg;
