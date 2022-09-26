import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

import { Languages } from '../languages/languages';
import { Locations } from '../locations/locations';
import { OtherApps } from '../other-apps/other-apps';
import { Skills } from '../skills/skills';
import { Title } from '../title/title';

import { MobileContainer } from './mobile-container';
import { LOCATIONS } from '../../constants/locations';
import { SKILLS } from '../../constants/skills';

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
        <Locations locationEntries={LOCATIONS} />
      </MobileContainer>
      <MobileContainer tileName={'Skills'}>
        <Skills skills={SKILLS} />
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
