import { useEffect } from 'react';

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
    <div className="flex flex-col pt-2 overflow-auto">
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
    </div>
  );
};
