/** @jsx jsx */
import { jsx } from '@emotion/core';
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
  min-height: 3.6rem;
`;

const Logo = styled.div``;

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div>
      <HeaderTemplate>
        <Burger onToggle={onToggle} />
        <Logo>Letshadow</Logo>
        <NavList toggle={toggle} />
        <NavProfile />
      </HeaderTemplate>
    </div>
  );
}

export default Navbar;
