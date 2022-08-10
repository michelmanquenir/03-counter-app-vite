import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp.jsx';
import { FirstApp } from './FirstApp.jsx';
import { CounterApp } from './CounterApp.jsx';

//css
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value={0}/> */}
    <FirstApp title='Hola soy Goku'/>
  </React.StrictMode>
);