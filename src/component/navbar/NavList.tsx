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
    align-items: baseline;
    flex-direction: column;
    top: 4rem;
    left: 0;
    background: white;
    height: 100%;
    width: 12rem;
    padding: 2rem;

    z-index: 200;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);

    ${props =>
      props.toggle
        ? css`
            transform: translateX(0%);
            -webkit-transform: translateX(0%);
            transition: transform 0.2s;
            -webkit-transition: transform 0.2s;
          `
        : css`
            transition: transform 0.2s;
            -webkit-transition: transform 0.2s;
          `};
  }
`;

const NavItem = styled(NavLink)`
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  margin-right: 0.8rem;

  &:hover {
    color: var(--main-color);
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    & + & {
      margin-top: 0.7rem;
    }
  }
`;

const activeStyle = {
  color: '#7950f2',
};

function NavList({ toggle }: any) {
  return (
    <>
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
    </>
  );
}

export default NavList;
