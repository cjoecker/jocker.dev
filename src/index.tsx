import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactGA from 'react-ga4';

import { App } from './App';
import { reportWebVitals } from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
ReactGA.initialize('G-4KWYY7GEE6');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
