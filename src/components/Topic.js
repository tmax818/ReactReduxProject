import React, { Component } from "react";

export default class Study extends Component {
  render() {
    const { topic } = this.props.match.params;

    return (
      <div className="jumbotron">
        <h1>{topic}</h1>
      </div>
    );
  }
}
