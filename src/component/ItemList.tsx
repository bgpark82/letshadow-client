import styled from '@emotion/styled';
import React from 'react';
import Item from './Item';

const ItemListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
  margin: 2rem auto 0 auto;
`;

function ItemList({ articles }: any) {
  return (
    <ItemListBlock>
      {articles.map((article: any) => (
        <Item key={article.url} article={article} />
      ))}
    </ItemListBlock>
  );
}

export default ItemList;