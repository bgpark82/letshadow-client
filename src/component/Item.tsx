import styled from '@emotion/styled';
import React from 'react';

const ItemBlock = styled.div``;

const ItemThumbnail = styled.div`
  img {
    width: 10rem;
    height: 7rem;
  }
`;

const ItemContent = styled.div``;

function Item({ article }: any) {
  const { title, description, url, urlToImage } = article;

  return (
    <ItemBlock>
      {urlToImage && (
        <ItemThumbnail>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </ItemThumbnail>
      )}
      <ItemContent>
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </ItemContent>
    </ItemBlock>
  );
}

export default Item;
