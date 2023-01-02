import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(
  document.getElementById('root')
);


class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

function tick() {
  root.render(<div>
    <Clock date={new Date()}/>
    <App/>
  </div>
    );
}

setInterval(tick, 1000);



