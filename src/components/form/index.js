import React from 'react';


// Importing Styles
import './styles.css';

// Length of Freebird in seconds
let songLength = 546;

export default class FreeBirdForm extends React.Component {
    constructor() {
        super()
        this.state = { value:[] };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.baseState = this.state 
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
        msg = "Great you can listen to Freebird " + calc.toFixed() + " freaking times 🤘";
      } 
  
      // Less than one listen
      if (timeInSeconds < songLength) {
        let remainder = (songLength - timeInSeconds) / 60;
        msg = "Dang! You need " + remainder.toFixed() + " more minutes to be free as a bird.";
      }
  
      // Zero time for Freebird
      if (timeInSeconds == 0) {
        msg = "You need to find some time to fly high. "
      }
  
      // Easter Egg - 69
      if (this.refs.message.value == 69) {
        msg = "Giggidy Giggidy 😉...You can listen to Freebird " + calc.toFixed() + " times."
      }
  
      // Easter Egg - 420
      if (this.refs.message.value == 420) {
        msg = "Maybe the smoke will help. You can listen to Freebird " + calc.toFixed() + " times."
      }

      // Easter Egg - 10
      if (this.refs.message.value == 10) {
          msg = "You can listen to Freebird " + calc.toFixed() + " time. 🤘"
      }

      // Easter Egg - Infinity ∞
      if (this.refs.message.value == "∞") {
        msg = "TIME IS A FLAT CIRCLE "
      }

      // Easter Egg - 1000
      if (this.refs.message.value > 999) {
        msg = "Whoa you really like Freebird " + calc.toFixed()
      }
      
      this.setState({value: msg});
  
    }


    updateInput = val => { 
      this.refs.message.value = ''
    }

    resetForm = () => {
      this.setState(this.baseState)
      this.updateInput() 
    }
    
   

  render() {
    return (
        <form
        onSubmit={this.handleSubmit}>
            <input
              ref="message"
              placeholder="mins"
              onSubmit={this.handleSubmit}
              maxlength="5" 
            />

            <h1 className="App-title">{this.state.value}</h1>

        </form>
   
    );
  }
}

/*
            <div class="cursor">
              <input
              ref="message"
              placeholder="mins"
              onSubmit={this.handleSubmit}
              />
              <i></i>
            </div>

                        <button
              onClick={this.resetForm}
              > X
            </button>
*/
