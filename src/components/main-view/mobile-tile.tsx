import { Typography } from '@mui/material';
import * as React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

export type Props = {
  children: React.ReactNode | React.ReactNode[];
  tileName?: string;
};

export const MobileTile = forwardRef<HTMLDivElement, Props>(
  ({ children, tileName }: Props) => {
    return (
        <MainContainer >
        {tileName && (
          <TileNameWrapper>
            <TileName variant="h3">
              {tileName}
            </TileName>
          </TileNameWrapper>
        )}
        <ChildrenContainer>{children}</ChildrenContainer>
      </MainContainer>
    );
  }
);

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
`;
const ChildrenContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const TileName = styled(Typography)`
  user-select: none;
`;
const TileNameWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
