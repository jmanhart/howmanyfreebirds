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

    let timeInSeconds = (this.refs.message.value * 60);
    let calc = timeInSeconds / songLength
    let msg;

    // More than one listen
    if (timeInSeconds > songLength) {
      msg = "You can listen to Freebird " + calc.toFixed() + " times 🤘";
    } 

    // Less than one listen
    if (timeInSeconds < songLength) {
      let remainder = (songLength - timeInSeconds) / 60;
      msg = "Dang! You need " + remainder.toFixed() + " more minutes to be free as a bird now.";
    }

    // Zero time for Freebird
    if (timeInSeconds == 0) {
      msg = "Get serious son! Find time for that sweet sweet swamp music!"
    }

    // Easter Egg - 69
    if (this.refs.message.value == 69) {
      msg = "Giggidy Giggidy 😉...You can listen to Freebird " + calc.toFixed() + " times."
    }

    // Easter Egg - 420
    if (this.refs.message.value == 420) {
      msg = "Whooa thats hella meta...You can listen to Freebird " + calc.toFixed() + " times."
    }

    console.log(calc);
    this.setState({value: msg});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <iframe src="https://giphy.com/embed/ayfwIEB2hvoDm" width="100" height="100" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <form
              onSubmit={this.handleSubmit}>
              <input
                  ref="message"
                  placeholder="How many minutes do you need to be free?"
                  onSubmit={this.handleSubmit}
                  />
          </form>
          <h1 className="App-title">{this.state.value}</h1>
        </header>

      </div>
    );
  }
}