import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

import { LOCATIONS } from '../../constants/locations';
import { SKILLS } from '../../constants/skills';
import { Languages } from '../languages/languages';
import { Locations } from '../locations/locations';
import { OtherApps } from '../other-apps/other-apps';
import { Skills } from '../skills/skills';
import { Title } from '../title/title';

import { MobileTile } from './mobile-tile';

export const MobileView = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
  }, []);

  return (
    <MainContainer>
      <MobileTile>
        <Title />
      </MobileTile>
      <MobileTile tileName={'Past locations'}>
        <Locations locationEntries={LOCATIONS} />
      </MobileTile>
      <MobileTile tileName={'Skills'}>
        <Skills skills={SKILLS} />
      </MobileTile>
      <MobileTile tileName={'Languages'}>
        <Languages />
      </MobileTile>
      <MobileTile tileName={'Own apps'}>
        <OtherApps />
      </MobileTile>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  overflow: auto;
`;
