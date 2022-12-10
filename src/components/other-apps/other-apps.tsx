import { Reorder } from 'framer-motion';
import { useState } from 'react';

import { OWN_APPS } from '../../constants/own-apps';
import { TransparentBox } from '../shared/TransparentBox';

import { AppButton } from './app-button';

export const OtherApps = () => {
  const [apps, setApps] = useState(() => OWN_APPS.map(app => app.name));
  return (
    <TransparentBox className="justify-center flex flex-1">
      <Reorder.Group
        as={'div'}
        className="px-0 py-2 flex list-none m-0"
        axis="x"
        values={apps}
        onReorder={setApps}
      >
        {apps.map(item => (
          <AppButton key={item} item={item} />
        ))}
      </Reorder.Group>
    </TransparentBox>
  );
};
