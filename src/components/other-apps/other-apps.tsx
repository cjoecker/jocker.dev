import { Paper } from '@mui/material';
import { Reorder } from 'framer-motion';
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { OWN_APPS } from '../../constants/own-apps';

import { AppButton } from './app-button';

export const OtherApps = () => {
  const [apps, setApps] = useState(() => OWN_APPS.map(app => app.name));
  return (
    <ContainerWrapper>
      <MenuContainer axis="x" values={apps} onReorder={setApps}>
        {apps.map(item => (
          <AppButton key={item} item={item} />
        ))}
      </MenuContainer>
    </ContainerWrapper>
  );
};

const MenuContainer = styled(Reorder.Group)`
  padding: 10px;
  display: flex;
  list-style-type: none;
  margin: 0;
`;
const ContainerWrapper = styled(Paper)`
  flex: 1;
  justify-content: center;
  display: flex;
`;
