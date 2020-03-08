import styled from '@emotion/styled';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { navItemList } from '../../static/navigation';

const NavListBlock = styled(animated.div)<{ toggle: boolean }>`
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
  const { transform, opacity } = useSpring({
    from: { transform: 'translateX(-12rem)', opacity: 0.5 },
    transform: toggle ? 'translateX(0rem)' : 'translateX(-12rem)',
    opacity: toggle ? 1 : 0.5,
    config: {
      tension: 350,
      friction: 30,
    },
  });

  return (
    <NavListBlock
      toggle={toggle}
      style={{
        transform: transform.interpolate(transform => transform),
        opacity: opacity.interpolate(opacity => opacity),
      }}
    >
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
