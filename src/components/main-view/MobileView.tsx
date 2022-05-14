import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Title } from '../title/Title';
import { locations } from '../../constants/locations';
import Locations from '../locations/Locations';
import { skills } from '../../constants/skills';
import { Skills } from '../skills/Skills';
import { OtherApps } from '../other-apps/OtherApps';
import { MobileContainer } from './components/MobileContainer';
import { Languages } from '../languages/Languages';
import { useIsScrolling } from '../../hooks/useIsScrolling';

export type MobileViewProps = {};
export const MobileView = ({}: MobileViewProps) => {
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
  }, []);

  const { onTouchStart, onTouchMove, onTouchEnd } = useIsScrolling();

  return (
    <MainContainer
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      ref={mainContainerRef}
    >
      <MobileContainer>
        <Title />
      </MobileContainer>
      <MobileContainer tileName={'Past locations'}>
        <Locations locationEntries={locations} />
      </MobileContainer>
      <MobileContainer tileName={'Skills'}>
        <Skills skills={skills} />
      </MobileContainer>
      <MobileContainer tileName={'Languages'}>
        <Languages />
      </MobileContainer>
      <MobileContainer tileName={'Own apps'}>
        <OtherApps />
      </MobileContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  overflow: auto;
`;
const PointerContainer = styled.div<{ isVerticallyScrolling: boolean }>`
  //pointer-events: ${props => (props.isVerticallyScrolling ? 'none' : 'auto')};
  //touch-action: ${props => (props.isVerticallyScrolling ? 'none' : 'auto')};
`;
// touch-action: ${props => props.isVerticallyScrolling ? 'auto' : 'none'};
