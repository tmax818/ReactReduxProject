import React, { Component } from "react";

export default class Study extends Component {
  render() {
    const { subject } = this.props.match.params;
    console.log(this.props.match.params.subject);
    return (
      <div className="jumbotron">
        <h1>{subject}</h1>
        <button className="btn btn-primary">Flash Cards</button>
        <button className="btn btn-primary">Quiz</button>
      </div>
    );
  }
}
