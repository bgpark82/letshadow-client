/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import Burger from './Burger';
import NavList from './NavList';
import NavProfile from './NavProfile';

const HeaderTemplate = styled.div`
  font-size: 1.125rem;
  font-weight: 800;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #e9ecef;
  min-height: 4rem;
  padding-top: 0.3rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const DarkBackground = styled.div<{ toggle: boolean }>`
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 4rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    opacity: 0;
    ${props =>
      props.toggle &&
      css`
        opacity: 1;
        transition: opacity 0.2s;
      `};
  }
`;

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <DarkBackground toggle={toggle} />
      <HeaderTemplate>
        <Burger onToggle={onToggle} />
        <Logo>letshadow</Logo>
        <NavList toggle={toggle} />
        <NavProfile />
      </HeaderTemplate>
    </div>
  );
}

export default Navbar;
