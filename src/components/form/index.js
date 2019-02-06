import React, { Component } from 'react';


// Importing Styles
import './styles.css';

// Length of Freebird in seconds
let songLength = 546;

export default class FreeBirdForm extends React.Component {
    constructor() {
        super()
        this.state = {value:[]};
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      handleSubmit(event){
        event.preventDefault();

        // Convert time to seconds
        let timeInSeconds = (this.refs.message.value * 60);
        // Find the amount of time for number of free birds
        let calc = timeInSeconds / songLength
        let msg;
    
        // More than one listen
        if (timeInSeconds > songLength) {
          msg = "Great you can listen to Freebird " + calc.toFixed() + " times 🤘";
        } 
    
        // Less than one listen
        if (timeInSeconds < songLength) {
          let remainder = (songLength - timeInSeconds) / 60;
          msg = "Dang! You need " + remainder.toFixed() + " more minutes to be free as a bird.";
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
          msg = "You can listen to Freebird " + calc.toFixed() + " times."
        }

        // Easter Egg - 10
        if (this.refs.message.value == 10) {
            msg = "Whooa thats hella meta...You can listen to Freebird " + calc.toFixed() + " time. 🤘"
        }

        // Easter Egg - Infinity ∞
        if (this.refs.message.value == "∞") {
          msg = "TIME IS A FLAT CIRCLE "
        }
    
        console.log(calc);
        this.setState({value: msg});
    
      }
    
  render() {
    return (
        <form
        onSubmit={this.handleSubmit}>
            <input
            ref="message"
            placeholder="mins"
            onSubmit={this.handleSubmit}
            />
            <h1 className="App-title">{this.state.value}</h1>
        </form>
   
    );
  }
}