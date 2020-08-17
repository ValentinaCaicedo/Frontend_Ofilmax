import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import App2 from './App2.js';
import App3 from './App3.js';
import '../src/index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 />
  </React.StrictMode>,
  document.getElementById('root')
);

