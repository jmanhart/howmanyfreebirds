import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// Import Components
import FreeBirdForm  from './components/form/index.js';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
        <iframe src="https://giphy.com/embed/ayfwIEB2hvoDm" width="50" height="50" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <h1 className="App-title">How many minutes do you need to be free?</h1>
        <FreeBirdForm  />
        </div>
        </header>
      </div>
    );
  }
}