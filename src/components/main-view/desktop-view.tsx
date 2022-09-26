import * as React from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import { postion } from '../../App';
import { LOCATIONS } from '../../constants/locations';
import { SKILLS } from '../../constants/skills';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useEffectUnsafe } from '../../unsafeHooks';
import { Languages } from '../languages/languages';
import { Locations } from '../locations/locations';
import { OtherApps } from '../other-apps/other-apps';
import { Skills } from '../skills/skills';
import { Title } from '../title/title';

import { DesktopContainer } from './desktop-container';
import { ZIndexProvider } from './z-index-context';

interface startPositions {
  title: postion;
  locations: postion;
  skills: postion;
  ownApps: postion;
  languages: postion;
}
export type HorizontalViewProps = {

};
export const DesktopView = ({}: HorizontalViewProps) => {
  const [positions, setPositions] = useState<undefined | startPositions>(
    undefined
  );
  const titleRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const ownAppsRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  const {browserWidth, browserHeight} = useWindowSize();

  useEffectUnsafe(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setPositions({
      title: {
        x: getWidthCenter(width, titleRef),
        y: getHeightCenter(height, titleRef) - 300
      },
      locations: {
        x: getWidthCenter(width, locationsRef) + 570,
        y: getHeightCenter(height, locationsRef) - 100
      },
      skills: {
        x: getWidthCenter(width, skillsRef) - 500,
        y: getHeightCenter(height, skillsRef) -30

      },
      ownApps: {
        x: getWidthCenter(width, ownAppsRef) + 130,
        y: getHeightCenter(height, ownAppsRef) + 120
      },
      languages: {
        x: getWidthCenter(width, languagesRef) - 20,
        y: getHeightCenter(height, languagesRef) - 100
      },
    });
  }, [browserWidth, browserHeight]);
  return (
    <ZIndexProvider>
      <DragContainer>
        <DesktopContainer position={positions?.title} ref={titleRef}>
          <Title />
        </DesktopContainer>
        <DesktopContainer
          position={positions?.locations}
          tileName={'Past locations'}
          ref={locationsRef}
        >
          <Locations locationEntries={LOCATIONS} />
        </DesktopContainer>
        <DesktopContainer
          position={positions?.skills}
          tileName={'Skills'}
          ref={skillsRef}
        >
          <Skills skills={SKILLS} />
        </DesktopContainer>
        <DesktopContainer
          position={positions?.ownApps}
          tileName={'Own apps'}
          ref={ownAppsRef}
        >
          <OtherApps />
        </DesktopContainer>
        <DesktopContainer
          position={positions?.languages}
          tileName={'Languages'}
          ref={languagesRef}
        >
          <Languages />
        </DesktopContainer>
      </DragContainer>
    </ZIndexProvider>
  );
};


const DragContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

function getHeightCenter(windowHeight: number, elementRef: React.RefObject<HTMLElement>) {
  return windowHeight * 0.5 - (elementRef.current?.offsetHeight ?? 0) / 2
}

function getWidthCenter(windowWidth: number, elementRef: React.RefObject<HTMLElement>) {
  return windowWidth * 0.5 - (elementRef.current?.offsetWidth ?? 0) / 2
}
