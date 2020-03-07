import styled from '@emotion/styled';
import React from 'react';

const BurgerBlock = styled.div`
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

function Burger({ onToggle }: any) {
  return (
    <BurgerBlock onClick={onToggle}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerBlock>
  );
}

export default Burger;
