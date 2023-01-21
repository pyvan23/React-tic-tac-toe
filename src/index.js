import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import { GameApp } from './GameApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameApp />
  </React.StrictMode>
);


reportWebVitals();
