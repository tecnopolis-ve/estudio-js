import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
// import WeatherData from './../src/components/WeatherLocation/WeatherData/index'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default App;
