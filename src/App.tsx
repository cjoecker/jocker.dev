import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { DesktopView } from './components/main-view/desktop-view';
import { MobileView } from './components/main-view/mobile-view';
import { useWindowSize } from './hooks/useWindowSize';
import { muiTheme } from './muiTheme';
import 'mapbox-gl/dist/mapbox-gl.css';

export interface postion {
  x: number;
  y: number;
}

export function App() {
  const { isMobile } = useWindowSize();
  return (
    <ThemeProvider theme={muiTheme}>
      <GlobalStyle color={muiTheme.palette.text.primary} />
      {isMobile ? <MobileView /> : <DesktopView />}
    </ThemeProvider>
  );
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
