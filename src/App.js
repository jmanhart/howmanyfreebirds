import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export default class App extends Component {
  constructor() {
    super()
    this.state = {value:[]};
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    let val = this.refs.message.value;
    let songLength = 546;
    let output = (val * 60) / songLength;

    if(val < songLength){
      let remainder = (songLength - val) / 60;
      output = "Dang! Find " + remainder.toFixed() + " more minutes for one full experience!" ;
    } 
    
    if(val > songLength){
      output = "You can listen to Freebird " + output.toFixed(2) + " times 🤘";
    } 

    this.setState({value: output});

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