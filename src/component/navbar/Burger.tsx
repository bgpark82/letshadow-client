import styled from '@emotion/styled';
import React from 'react';
import { color } from '../../utils/theme';

const BurgerBlock = styled.div`
  display: none;
  cursor: pointer;
  & div {
    width: 20px;
    height: 3px;
    background-color: ${color.main};
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
