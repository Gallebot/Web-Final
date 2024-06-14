// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Importar CSS global
import App from '../src/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
