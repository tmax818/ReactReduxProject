import React, { Component } from 'react';
import Card from '../components/cards/Card';

class Cards extends Component {
  render() {
    const { location, match } = this.props;
    console.log(location, match);
    return (
      <div>
        <h1>{location.state.title} Cards</h1>
        <button type="button" className="btn btn-primary btn-lg">
          Study Cards
        </button>

        <Card />
      </div>
    );
  }
}

export default Cards;
