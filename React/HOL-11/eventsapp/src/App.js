import React, { Component } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 5
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });

    this.sayHello();
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Member1");
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  onPress = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div className="App">

        <h3>{this.state.count}</h3>

        <button onClick={this.increment}>Increment</button>
        <br /><br />

        <button onClick={this.decrement}>Decrement</button>
        <br /><br />

        <button onClick={() => this.sayWelcome("welcome")}>
          Say welcome
        </button>
        <br /><br />

        <button onClick={this.onPress}>
          Click on me
        </button>

        <br /><br />

        <CurrencyConvertor />

      </div>
    );
  }
}

export default App;