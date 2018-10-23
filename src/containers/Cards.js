import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';

class Cards extends Component {
  state = {
    show: false,
    front: '',
    back: '',
    rating: ''
  };

  componentDidMount() {
    if (this.props.cards.length === 0) {
      this.props.fetchCards(this.props.match.url);
    }
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
    const { location } = this.props;
    return (
      <div>
        <h1>{location.state.title} Cards</h1>
        <button onClick={this.handleClick} className="btn btn-primary btn-lg">
          Study Cards
        </button>

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
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    cards: state.cards
  };
};

const mapDispathtoProps = dispatch => {
  return {
    fetchCards: path => {
      dispatch(fetchCards(path));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(Cards);
