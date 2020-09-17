import React, { Component } from "react";

export class HelloMessage extends Component {
  render() {
    //   The props that have been sent to a class component can be accessed using this.props.
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default HelloMessage;