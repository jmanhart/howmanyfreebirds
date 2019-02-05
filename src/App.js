import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let songLength = 546;
export default class App extends Component {
  constructor() {
    super()
    this.state = {value:[]};
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    
  
    let door = this.refs.message.value * 60;

    let val = door / songLength;


    console.log(val);

    if (songLength < val){
      val = "You can listen to Freebird " + val.toFixed(2) + " times 🤘";
    } else if (val < songLength) {
      val = "NO " + val.toFixed(2) + " times 🤘";
    }

    

    this.setState({value: val});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">🇺🇸</h1>
          <h1 className="App-title">How many Freebirds?</h1>
          <form
              onSubmit={this.handleSubmit}>
              <input
                  ref="message"
                  placeholder="Send a message..."
                  onSubmit={this.handleSubmit}
                  />
          </form>
          {this.state.value}
        </header>

      </div>
    );
  }
}