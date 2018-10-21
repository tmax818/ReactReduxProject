import React, { Component } from 'react';

export default class Topic extends Component {
  render() {
    const { topic } = this.props.match.params;
    console.log(this.props);
    return (
      <div className="jumbotron">
        <h1>{topic}</h1>
      </div>
    );
  }
}
