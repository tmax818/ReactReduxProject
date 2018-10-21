import React, { Component } from 'react';
import Card from '../components/Card';

class Cards extends Component {
  render() {
    const { subject } = this.props.match.params;
    return (
      <div>
        <h1>{subject} Cards</h1>
        <Card />
      </div>
    );
  }
}

export default Cards;
