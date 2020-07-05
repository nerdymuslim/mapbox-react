import React, { Component } from "react";

export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hey Message!",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
