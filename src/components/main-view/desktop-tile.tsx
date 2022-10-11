import { Typography } from '@mui/material';
import { motion, useDragControls } from 'framer-motion';
import * as React from 'react';
import { forwardRef, useState } from 'react';
import styled from 'styled-components';

import { postion } from '../../App';

import { useZIndex } from './z-index-context';

export type Props = {
  children: React.ReactNode | React.ReactNode[];
  tileName?: string;
  position: postion | undefined;
};

export const DesktopTile = forwardRef<HTMLDivElement, Props>(
  ({ children, tileName, position }: Props, ref) => {
    const dragControls = useDragControls();
    const onStartDrag = (event: any) => {
      dragControls.start(event, { snapToCursor: false });
    };
    const [zIndex, setZIndex] = useState(0);
    const {maxZIndex, updateMaxZIndex} = useZIndex()
    const onDragStart = () => {
      setZIndex(maxZIndex)
      updateMaxZIndex()
    };
    return (
      <MainContainer
        zIndex={zIndex}
        style={{ left: `${position?.x}px`, top: `${position?.y}px` }}
        ref={ref}
        drag
        onMouseDown={onDragStart}
        dragMomentum={false}
        dragListener={!tileName}
        dragControls={dragControls}
      >
        {tileName && (
          <TileNameWrapper>
            <TileName variant="h3" onPointerDown={onStartDrag}>
              {tileName}
            </TileName>
          </TileNameWrapper>
        )}
        <ChildrenContainer isDraggable={!tileName}>
          {children}
        </ChildrenContainer>
      </MainContainer>
    );
  }
);

const MainContainer = styled(motion.div)<{ zIndex: number }>`
  max-width: 500px;
  position: absolute;
  user-select: none;
  z-index: ${p => p.zIndex};
  display: flex;
  flex-direction: column;
  pointer-events: none;
`;
const ChildrenContainer = styled.div<{ isDraggable: boolean }>`
  position: relative;
  cursor: ${p => (p.isDraggable ? 'grab' : 'undefined')};
  pointer-events: auto;
`;
const TileName = styled(Typography)`
  display: inline;
  text-align: left;
  cursor: grab;
  position: relative;
  user-select: none;
  padding-right: 20px;
  pointer-events: auto;
`;
const TileNameWrapper = styled.div`
  display: flex;
`;
