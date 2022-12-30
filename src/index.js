import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyComponent from './MyComponent';



const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div className='App-header'>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <App />
      <MyComponent />
    </div>
  );
  root.render(element);}

setInterval(tick, 1000);



