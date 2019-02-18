import React, { Component } from 'react';
//var Display = require('./Display');
import Display from './componentOne';
import Display2 from './componentTwo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <h1 className='h1'>This is my main component ! </h1>
      <Display />
      <Display2 name='johan' age='25'/>
      </div>
    );
  }
}

export default App;
