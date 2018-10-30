import React, { Component } from 'react';
import DataButtons from './DataButtons';

export default class Card extends Component {
  state = {
    cards: [],
    show: false
  };

  componentDidMount() {
    this.makeCard();
  }

  handleClick = () => {
    this.makeCard();
  };

  makeCard = () => {
    const { cards } = this.props.location.state;
    let card = cards.shift();
    card.count = card.count + 1;
    console.log(card.count);
    console.log(card);
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <div className="card text-center">
          <div className="card-body" />
          <div className="card-header" style={{ height: '10em' }}>
            <h1>Front</h1>
          </div>
          <button onClick={this.makeCard} className="btn btn-secondary btn-sm">
            Show Answer
          </button>
          <div className="card-header" style={{ height: '10em' }}>
            <h1>{this.state.show ? this.state.back : null}</h1>
          </div>
        </div>
        <DataButtons handleClick={this.handleClick} />
      </div>
    );
  }
}
