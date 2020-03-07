import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItemList } from '../../static/navigation';

const NavListBlock = styled.div<{ toggle: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 3.6rem;
    background: white;
    height: 100%;
    left: 0;
    width: 12rem;
    flex-direction: column;
    transform: translateX(-100%);

    padding-left: 1.5rem;
    z-index: 500;
    ${props =>
      props.toggle
        ? css`
            transform: translateX(0%);

            transition: transform 0.2s;
          `
        : css`
            transition: transform 0.2s;
          `};
  }
  @media screen and (max-width: 568px) {
    width: 50%;
  }
`;

const NavItem = styled(NavLink)`
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  margin-right: 1rem;
  &:hover {
    color: #7950f2;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    & + & {
      margin-top: 0.3rem;
    }
  }
`;

const activeStyle = {
  color: '#7950f2',
};

function NavList({ toggle }: any) {
  return (
    <NavListBlock toggle={toggle}>
      {navItemList.map((h: any) => (
        <NavItem
          key={h.name}
          activeStyle={activeStyle}
          to={h.name === 'all' ? '/' : `/${h.name}`}
          exact
        >
          {h.text}
        </NavItem>
      ))}
    </NavListBlock>
  );
}

export default NavList;
