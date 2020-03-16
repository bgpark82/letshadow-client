import styled from '@emotion/styled';
import React from 'react';
import Item, { ItemSkeleton } from './Item';

const ItemListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
  margin: 4rem auto 0 auto;
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

export function ItemListSkeleton({ articles }: any) {
  return (
    <ItemListBlock>
      {articles.map((article:number,index:number) => (
        <ItemSkeleton key={index} article={article} />
      ))}
    </ItemListBlock>
  );
}

export default ItemList;
