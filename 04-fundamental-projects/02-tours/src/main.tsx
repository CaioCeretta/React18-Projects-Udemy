import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { TourProvider } from './TourContext';

ReactDOM.render(
  <TourProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TourProvider>,
  document.getElementById('root')
)