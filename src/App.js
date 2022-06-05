import React, { Component } from "react";
//import "./styles.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div id="component-app">
        <div id="counter-display">
          <h1>{this.state.counter}</h1>
        </div>
        <button
          id="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Add
        </button>
      </div>
    );
  }
}

export default App;
