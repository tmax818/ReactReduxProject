import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';
import Card from '../components/cards/Card';

class Cards extends Component {
  state = {
    show: false
  };

  componentDidMount() {
    this.props.fetchCards(this.props.match.url);
  }

  handleClick = () => {
    this.setState({ show: true });
  };

  render() {
    const { location } = this.props;
    return (
      <div>
        <h1>{location.state.title} Cards</h1>
        <button onClick={this.handleClick} className="btn btn-primary btn-lg">
          Study Cards
        </button>
        <br />
        {this.state.show ? <Card cards={this.props.cards} /> : null}
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
