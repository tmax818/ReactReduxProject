import React, { Component } from 'react';
import DataButtons from './DataButtons';

export default class Card extends Component {
  state = {
    show: false,
    front: '',
    back: '',
    rating: 0
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
    let NextButton = {
      /* <button onClick={this.handleClick} className="btn btn-secondary btn-lg">
        Show Next Card
      </button> */
    };
    return (
      <div>
        <div className="card text-center">
          <div className="card-body" />
          <div className="card-header">{this.state.front}</div>
          <button
            onClick={() =>
              this.setState({ show: true, count: this.state.count + 1 })
            }
            className="btn btn-secondary btn-sm"
          >
            Show Answer
          </button>
          <div className="card-header">
            {this.state.show ? this.state.back : null}
          </div>
        </div>
        <DataButtons handleClick={this.handleClick} />
      </div>
    );
  }
}
