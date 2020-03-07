import styled from '@emotion/styled';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBlock = styled.div`
  display: flex;
  padding: 1.2rem 25rem 1rem 25rem;

  border-bottom: 1px solid #e9ecef;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Header = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  font-weight: 800;

  margin-right: 1rem;
  &:hover {
    color: #7950f2;
  }
`;

const activeStyle = {
  color: '#7950f2',
};

function Head({ onSelect, header }: any) {
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

  return (
    <HeaderBlock>
      {headerList.map(h => (
        <Header
          key={h.name}
          activeStyle={activeStyle}
          onClick={() => onSelect(h.name)}
          to={h.name === 'all' ? '/' : `/${h.name}`}
          exact
        >
          {h.text}
        </Header>
      ))}
    </HeaderBlock>
  );
}

export default Head;
