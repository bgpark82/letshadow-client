/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { gray } from '../utils/theme';

type SkeletonProps = {
  height?: string | number;
  width?: string | number;
  marginBottom?: string | number;
};

function Skeleton({ height, width, marginBottom }: SkeletonProps) {
  return <Block css={[{ height }, { width }, { marginBottom }]} />;
}

const shining = keyframes`
    0% {opacity:0.5}
    50% {opacity:1}
    100% {opacity:0.5}
`;

const Block = styled.div`
  background: ${gray.sub};
  height: 1rem;
  animation: ${shining} 1s ease-in-out infinite;
  border-radius: 3%;
`;

export default Skeleton;
