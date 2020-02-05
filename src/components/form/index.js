import React from "react";

// Importing Styles
import "./styles.css";

let songLength = 546;

export default class FreeBirdForm extends React.Component {
  constructor() {
    super();
    this.state = { value: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.baseState = this.state;
  }

  handleSubmit(event) {
    event.preventDefault();

    let timeInSeconds = this.refs.message.value * 60;
    let calc = timeInSeconds / songLength;
    let msg;

    // More than one listen
    if (timeInSeconds > songLength) {
      msg = (
        <div className="results-content">
          <img src={"images/happy-01.png"} alt="some value" />
          <span className="base">
            You could listen to <span className="free-bird">Free Bird</span>{" "}
            {calc.toFixed()} freakin' times
          </span>
        </div>
      );
    }

    // Less than one listen
    if (timeInSeconds < songLength) {
      let remainder = (songLength - timeInSeconds) / 60;
      msg = (
        <div className="results-content">
          <img src={"images/mixed-01.png"} alt="some value" />
          <span className="base">
            Get serious you need {remainder.toFixed()} more minutes to be{" "}
            <span className="free-bird"> Free</span> as a bird
          </span>
        </div>
      );
    }

    // Easter Egg for 0
    if (timeInSeconds === 0) {
      msg = (
        <div className="results-content">
          <img src={"images/sad-01.png"} alt="some value" />
          <span className="base">
            You are making poor Ronnie sad. Find some time in your life to be
            Free.{" "}
          </span>
        </div>
      );
    }

    // Easter Egg - 69
    if (this.refs.message.value === 69) {
      msg = (
        <div className="results-content">
          <img src={"images/happy-04.png"} alt="some value" />
          <span className="base">
            Giggidy Giggidy...You can get down to Freebird {calc.toFixed()}{" "}
            times.{" "}
          </span>
        </div>
      );
    }

    // Easter Egg - 420
    if (this.refs.message.value === 420) {
      msg =
        "Maybe the smoke will help. You can listen to Freebird " +
        calc.toFixed() +
        " times.";
    }

    // Easter Egg - 10
    if (this.refs.message.value === 10) {
      msg = "You can listen to Freebird " + calc.toFixed() + " time. 🤘";
    }

    // Easter Egg - Infinity ∞
    if (this.refs.message.value === "∞") {
      msg = "TIME IS A FLAT CIRCLE ";
    }

    // Easter Egg - 1000
    if (this.refs.message.value > 999) {
      msg = (
        <div className="results-content">
          <img src={"images/happy-02.png"} alt="some value" />
          <span className="base">
            Look at you living that free life. You could listen to{" "}
            <span className="free-bird">Free Bird</span> {calc.toFixed()}{" "}
            freakin' times.
          </span>
        </div>
      );
    }

    this.setState({ value: msg });
    console.log(this.refs.message.value);
  }

  updateInput = val => {
    this.refs.message.value = "";
  };

  resetForm = () => {
    this.setState(this.baseState);
    this.updateInput();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-container">
          <span className="base" style={{ marginBottom: "1em" }}>
            How many <strong>free</strong> minutes do you have?
          </span>
          <input
            ref="message"
            placeholder="mins"
            onSubmit={this.handleSubmit}
            maxLength="25"
          />
        </div>

        <div className="results-container">{this.state.value}</div>
      </form>
    );
  }
}
