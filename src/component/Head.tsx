import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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

const Profile = styled.div``;

const HeaderBlock = styled.div<{ toggle: boolean }>`
  display: flex;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 3.6rem;
    background: white;
    height: 100%;
    left: 0;
    width: 50%;
    flex-direction: column;
    transform: translateX(-100%);
    opacity: 0;

    ${props =>
      props.toggle
        ? css`
            transform: translateX(0%);
            opacity: 100%;
            transition: transform 0.3s, opacity 0.3s;
          `
        : css`
            transition: transform 0.8s, opacity 0.3s;
          `}
  }
`;

const Header = styled(NavLink)`
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  margin-right: 1rem;
  &:hover {
    color: #7950f2;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  & div {
    width: 20px;
    height: 3px;
    background-color: #7950f2;
    margin: 4px;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const activeStyle = {
  color: '#7950f2',
};

function Head() {
  const headerList = [
    {
      name: 'all',
      text: '전체보기',
    },
    {
      name: 'business',
      text: '비즈니스',
    },
    {
      name: 'entertainment',
      text: '엔터테인먼트',
    },
    {
      name: 'health',
      text: '건강',
    },
    {
      name: 'science',
      text: '과학',
    },
    {
      name: 'sport',
      text: '스포츠',
    },
    {
      name: 'technology',
      text: '기술',
    },
  ];

  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <HeaderTemplate>
      <Burger onClick={onToggle}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
      <Logo>Letshadow</Logo>
      <HeaderBlock toggle={toggle}>
        {headerList.map(h => (
          <Header
            key={h.name}
            activeStyle={activeStyle}
            to={h.name === 'all' ? '/' : `/${h.name}`}
            exact
          >
            {h.text}
          </Header>
        ))}
      </HeaderBlock>
      <Profile>프로필</Profile>
    </HeaderTemplate>
  );
}

export default Head;
