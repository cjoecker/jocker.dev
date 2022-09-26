import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { HorizontalView } from './components/main-view/HorizontalView';
import { MobileView } from './components/main-view/MobileView';
import { useWindowSize } from './hooks/useWindowSize';
import { muiTheme } from './muiTheme';

export interface postion {
  x: number;
  y: number;
}

export function App() {
  const { isMobile } = useWindowSize();
  return (
    <ThemeProvider theme={muiTheme}>
      <GlobalStyle color={muiTheme.palette.text.primary} />
      {isMobile ? <MobileView /> : <HorizontalView />}
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
