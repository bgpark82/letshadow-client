import styled from '@emotion/styled';
import React from 'react';
import { toYMD } from '../utils/Date';
import { gray } from '../utils/theme';
import Skeleton from './Skeleton';

const ItemBlock = styled.div`
  margin: 0px;
  width: 16rem;
  margin-bottom: 5rem;
`;

const ItemThumbnail = styled.div`
  img {
    width: 100%;
    height: 16rem;
    border-radius: 7px;
    object-fit: cover;
  }
`;

const ItemContent = styled.div`
  .item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item-source {
    font-size: 0.7em;
    color: white;
    background: #f03e3e;
    padding: 0.1rem 0.3rem 0.2rem 0.3rem;
    border-radius: 5px;
  }
  .item-date {
    font-size: 0.8em;
    color: #757575;
  }
  h2 {
    margin: 0.5rem 0;
    font-size: 1.2em;
  }
  a {
    text-decoration: none;
    &:link {
      color: black;
    }
    &:visited {
      color: black;
    }
    &:hover {
      color: ${gray.hover};
    }
  }
`;

function Item({ article }: any) {
  const { title, url, urlToImage, publishedAt, source } = article;

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
        <div className="item-bottom">
          <div className="item-source">{source.name}</div>
          <div className="item-date">{toYMD(publishedAt)}</div>
        </div>
      </ItemContent>
    </ItemBlock>
  );
}

export function ItemSkeleton({ article }: any) {
  const { url } = article;

  return (
    <ItemBlock>
      <ItemThumbnail>
        <Skeleton height="16rem" />
      </ItemThumbnail>

      <ItemContent>
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Skeleton marginBottom="0.5rem" height="1.5rem" />
            <Skeleton marginBottom="0.5rem" height="1.5rem" />
            <Skeleton marginBottom="0.5rem" height="1.5rem" />
          </a>
        </h2>
        <div className="item-bottom">
          <div>
            <Skeleton width="3rem" height="1.5rem" />
          </div>
          <div className="item-date">
            <Skeleton width="5rem" height="1rem" />
          </div>
        </div>
      </ItemContent>
    </ItemBlock>
  );
}

export default Item;
