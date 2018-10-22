import React, { Component } from 'react';
import Card from '../components/cards/Card';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';

class Cards extends Component {
  componentDidMount() {
    console.log(this.props);

    this.props.fetchCards(this.props.match.url);
  }

  render() {
    const { location, match } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>{location.state.title} Cards</h1>
        <button type="button" className="btn btn-primary btn-lg">
          Study Cards
        </button>

        {/* <Card /> */}
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
