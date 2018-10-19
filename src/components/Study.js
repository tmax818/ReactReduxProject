import React, { Component } from 'react';

export default class Study extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Study</h1>
        <button className="btn btn-primary">Flash Cards</button>
        <button className="btn btn-primary">Quiz</button>
      </div>
    );
  }
}
