import styled from '@emotion/styled';
import React from 'react';
import media from '../utils/media';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  ${media.medium} {
    width: 768px;
  }

  ${media.small} {
    width: 100;
  }
`;

function Responsive({ children, ...rest }: any) {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
}

export default Responsive;
