import React, { Component } from 'react';

class Cards extends Component {
  render() {
    const { subject } = this.props.match.params;
    return (
      <div>
        <h1>{subject} Cards</h1>
      </div>
    );
  }
}

export default Cards;
