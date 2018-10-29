import React, { Component } from 'react';
import DataButtons from './DataButtons';

export default class Card extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.makeCard();
  }

  handleClick = () => {
    this.makeCard();
  };

  makeCard = () => {
    if (this.props.cards.length > 0) {
      let card = this.props.cards.shift();
      this.setState({ show: false, front: card.front, back: card.back });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="card text-center">
          <div className="card-body" />
          <div className="card-header" style={{ height: '10em' }}>
            <h1>{this.state.front}</h1>
          </div>
          <button
            onClick={() =>
              this.setState({
                show: true,
                count: this.state.count + 1
              })
            }
            className="btn btn-secondary btn-sm"
          >
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
