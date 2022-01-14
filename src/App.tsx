import React, { useLayoutEffect, useRef, useState } from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import Locations from './components/locations/Locations';
import { locations } from './constants/locations';
import muiTheme from './muiTheme';
import { ThemeProvider } from '@mui/material';
import { TilesContainer } from './components/tiles-container/TilesContainer';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ocean from './videos/ocean.mp4';
import { Title } from './components/title/Title';
import { useEffectUnsafe } from './unsafeHooks';
import { Skills } from './components/skills/Skills';
import { skills } from './constants/skills';
import { AppsDashboard } from './components/own-apps/AppsDashboard';

export interface postion {
  x: number;
  y: number;
}

interface startPositions {
  title: postion;
  locations: postion;
  skills: postion;
  ownApps: postion;
}

function App() {
  const [positions, setPositions] = useState<undefined | startPositions>(
    undefined
  );
  const titleRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const ownAppsRef = useRef<HTMLDivElement>(null);
  const [viewWidth, viewHeight] = useWindowSize();

  useEffectUnsafe(() => {
    const width = window.innerWidth;

    setPositions({
      title: {
        x: width * 0.5 - (titleRef.current?.offsetWidth ?? 0) / 2,
        y: 30,
      },
      locations: {
        x: 30,
        y: 40,
      },
      skills: {
        x: width - (skillsRef.current?.offsetWidth ?? 0) - 30,
        y: (titleRef.current?.offsetHeight ?? 0) + 40,
      },
      ownApps: {
        x: width/2 - (ownAppsRef.current?.offsetWidth ?? 0),
        y: (titleRef.current?.offsetHeight ?? 0) + 70,
      },
    });
  }, [viewWidth, viewHeight]);

  return (
    <ThemeProvider theme={muiTheme}>
      <DragContainer>
        {/*<Video className='videoTag' autoPlay loop muted>*/}
        {/*  <source src={ocean} type='video/mp4' />*/}
        {/*</Video>*/}

        <GlobalStyle color={muiTheme.palette.text.primary} />
        <TilesContainer position={positions?.title} ref={titleRef}>
          <Title />
        </TilesContainer>
        <TilesContainer
          position={positions?.locations}
          tileName={'Past locations'}
          ref={locationsRef}
        >
          <Locations locationEntries={locations} />
        </TilesContainer>
        <TilesContainer
          position={positions?.skills}
          tileName={'Skills'}
          ref={skillsRef}
        >
          <Skills skills={skills} />
        </TilesContainer>
        <TilesContainer
          position={positions?.ownApps}
          tileName={'Own apps'}
          ref={ownAppsRef}
        >
          <AppsDashboard />
        </TilesContainer>
      </DragContainer>
    </ThemeProvider>
  );
}

export default App;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export const GlobalStyle = createGlobalStyle<{ color?: string }>`
  html{
    height: 100%;
    background-color: #161616;
  }
 
  body {
    --margin-s: 5px;
    --margin-m: 10px;
    --margin-l: 20px;
    color: ${p => p.color ?? 'white'};
    background: linear-gradient(0deg,#2b2e34,#161616);
    text-align: center;
    min-height: 100%;
    overflow:auto;
    margin: 0;
    padding: 0;
  }
`;

const DragContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
