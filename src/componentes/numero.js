import React, { Component } from "react";

class Numero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: null,
    };
  }

  handleClick = (min, max) => {
    max = 100;
    this.setState({ random: Math.floor(Math.random() * max) });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Clickeame</button>
        {this.state.random}
      </div>
    );
  }
}
export default Numero;
