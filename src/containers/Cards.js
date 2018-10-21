import React, { Component } from 'react';
import Card from '../components/cards/Card';

class Cards extends Component {
  render() {
    const { subject } = this.props.match.params;
    return (
      <div>
        <h1>{subject} Cards</h1>
        <button type="button" className="btn btn-primary btn-lg">
          Study Cards
        </button>

        {/* <Card /> */}
      </div>
    );
  }
}

export default Cards;
