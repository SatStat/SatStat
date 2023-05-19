import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Overview from './pages/Overview/Overview';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Overview />
  </React.StrictMode>
);

