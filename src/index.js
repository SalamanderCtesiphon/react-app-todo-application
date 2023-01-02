import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(
  document.getElementById('root')
);


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

function tick() {
  root.render(<div>
    <Clock />
    <App/>
  </div>
    );
}

setInterval(tick, 1000);



