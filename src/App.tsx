import React from 'react';

import { DesktopView } from './components/main-view/desktop-view';
import { MobileView } from './components/main-view/mobile-view';
import { useWindowSize } from './hooks/useWindowSize';
import 'mapbox-gl/dist/mapbox-gl.css';

export function App() {
  const { isMobile } = useWindowSize();
  return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
}

export interface postion {
  x: number;
  y: number;
}
