import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp.jsx';
import { FirstApp } from './FirstApp.jsx';

//css
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
);