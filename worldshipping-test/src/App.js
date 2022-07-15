/*
For this piece of the test, you will have a several CSS and ReactJS questions.

ReactJS
  1. Fill in your name and the date in the "By" line. 
  2. Add a Function to be called when the Random Number is clicked to change the Number Header State
  3. The random number needs to be between 0 and 100 and showing no decimals 
  4. Add to the log text area saying "Random Number to " and then the new number generated on a new line.  
  5. Add a Function to be called when the Increment Number is clicked to change the Number Header State
  6. If the number will be above 100 (an increment from 100 to 101) display an error stating that the maximum number is 100 
  7. Add to the log text area saying "Incremented Number to " and then the new number generated on a new line.  
  8. Add a text area for the log state that is 10 rows in height and 100 in width. 
  9. Make sure when each button is click, they are visible in the log and each is on a different line. Wording for this is in #4 and #7.

CSS
  For the CSS portion, getting the basics is the most important which will be listed below, however if you consider yourself a web designer and want to do more than the list, please do. 

  1. Style the buttons to any extent you want to
  2. Add an image to the background that still allows you to read everything. 
  3. If the number is greater than or equal to 50, then the number header needs to be a red. If the number is below 50, then the number header needs to be a blue. 
*/

import React from "react";
import css from "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberHeader: 0,
      randomLog: "Random number to\n",
      incrementLog: "Incremented number to\n"
    };
  }

  randomNumber = () => {
    this.setState({ numberHeader: Math.floor(Math.random() * 100) });
  };

  incrementNumber = () => {
    if (this.state.numberHeader < 100) {
      this.setState({ numberHeader: this.state.numberHeader + 1 });
    } else {
      alert("The maximum number is 100");
    }
  };

  render() {
    return (
      <div className="App">
        <h1 style={this.state.numberHeader >= 50 ? {color: "red"} : {color: "blue"}}>{this.state.numberHeader}</h1>
        <div>
          <textarea
            rows="10"
            cols="100"
            value={`${this.state.randomLog} ${this.state.numberHeader}\n${this.state.incrementLog} ${this.state.numberHeader}`}
          />
        </div>
        <button className="random-button" onClick={this.randomNumber}>
          Random Number
        </button>
        <button className="increment-button" onClick={this.incrementNumber}>
          Increment Number
        </button>
        <br></br>
        <br></br>
        <p> By: Chris Helm - 07/15/2022</p>
        <p> &#169; 2019 World Shipping, Inc.</p>
      </div>
    );
  }
}

export default App;
