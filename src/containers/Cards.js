import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';
import { Link } from 'react-router-dom';

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
    const { location, match } = this.props;
    console.log(location, match);
    return (
      <div>
        <h1>{location.state.title} Cards</h1>
        <Link
          to={{
            pathname: `${match.url}/cards`,
            state: { cards: this.props.cards }
          }}
          className="btn btn-primary btn-lg"
        >
          Study Cards
        </Link>
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
