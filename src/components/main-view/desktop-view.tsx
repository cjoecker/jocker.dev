import { useLayoutEffect, useRef, useState } from 'react';

import { postion } from '../../App';
import { LOCATIONS } from '../../constants/locations';
import { SKILLS } from '../../constants/skills';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Languages } from '../languages/languages';
import { Locations } from '../locations/locations';
import { OtherApps } from '../other-apps/other-apps';
import { Skills } from '../skills/skills';
import { Title } from '../title/title';

import { DesktopTile } from './desktop-tile';
import { ZIndex } from './z-index-context';

interface startPositions {
  title: postion;
  locations: postion;
  skills: postion;
  ownApps: postion;
  languages: postion;
}

export const DesktopView = () => {
  const [positions, setPositions] = useState<undefined | startPositions>(
    undefined
  );
  const titleRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const ownAppsRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  const { browserWidth, browserHeight } = useWindowSize();

  useLayoutEffect(() => {
    setPositions({
      title: getPosition(window, titleRef, 0, 0.9),
      locations: getPosition(window, locationsRef, -0.9, 0.1),
      skills: getPosition(window, skillsRef, 0.9, -0.1),
      ownApps: getPosition(window, ownAppsRef, -0.1, -0.9),
      languages: getPosition(window, languagesRef, 0, 0),
    });
  }, [browserWidth, browserHeight]);
  return (
    <ZIndex>
      <div className="fixed w-full h-full overflow-hidden">
        <DesktopTile position={positions?.title} ref={titleRef}>
          <Title />
        </DesktopTile>
        <DesktopTile
          position={positions?.locations}
          tileName={'Past locations'}
          ref={locationsRef}
        >
          <Locations locationEntries={LOCATIONS} />
        </DesktopTile>
        <DesktopTile
          position={positions?.skills}
          tileName={'Skills'}
          ref={skillsRef}
        >
          <Skills skills={SKILLS} />
        </DesktopTile>
        <DesktopTile
          position={positions?.ownApps}
          tileName={'Own apps'}
          ref={ownAppsRef}
        >
          <OtherApps />
        </DesktopTile>
        <DesktopTile
          position={positions?.languages}
          tileName={'Languages'}
          ref={languagesRef}
        >
          <Languages />
        </DesktopTile>
      </div>
    </ZIndex>
  );
};

function getPosition(
  window: Window,
  elementRef: React.RefObject<HTMLElement>,
  xOffsetAsFraction: number,
  yOffsetAsFraction: number
) {
  const screenXCenter = window.innerWidth * 0.5;
  const screenYCenter = window.innerHeight * 0.5;
  const elementXCenter = (elementRef.current?.offsetWidth ?? 0) / 2;
  const elementYCenter = (elementRef.current?.offsetHeight ?? 0) / 2;
  const elementX = elementXCenter - screenXCenter;
  const elementY = elementYCenter - screenYCenter;
  return {
    x: elementX * xOffsetAsFraction + screenXCenter - elementXCenter,
    y: elementY * yOffsetAsFraction + screenYCenter - elementYCenter,
  };
}
