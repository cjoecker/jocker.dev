import * as React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { postion } from '../App';

export type TilesContainerProps = {
  children: JSX.Element;
  tileName?: string;
  position: postion | undefined;
};

export const TilesContainer = forwardRef<HTMLDivElement, TilesContainerProps>(
  ({ children, tileName, position }: TilesContainerProps, ref) => {
    return (
      <MainContainer
        style={{ x: position?.x, y: position?.y }}
        ref={ref}
        drag
        dragMomentum={false}
      >
        {tileName && <TileName variant="h3">{tileName}</TileName>}
        <ChildrenContainer>{children}</ChildrenContainer>
      </MainContainer>
    );
  }
);

const MainContainer = styled(motion.div)`
  max-width: 400px;
  position: absolute;
`;
const ChildrenContainer = styled.div`
  position: relative; 
`;
const TileName = styled(Typography)`
  display: block;
  text-align: left;
  cursor: grab;
  position: relative;
`;
