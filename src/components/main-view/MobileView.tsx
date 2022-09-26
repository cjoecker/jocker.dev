import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

import { locations } from '../../constants/locations';
import { skills } from '../../constants/skills';
import { Languages } from '../languages/Languages';
import Locations from '../locations/Locations';
import { OtherApps } from '../other-apps/OtherApps';
import { Skills } from '../skills/Skills';
import { Title } from '../title/Title';

import { MobileContainer } from './components/MobileContainer';

export type MobileViewProps = {};
export const MobileView = ({}: MobileViewProps) => {
  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
  }, []);

  return (
    <MainContainer>
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
