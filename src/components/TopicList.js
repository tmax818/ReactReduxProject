import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions';

class TopicList extends Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  renderButtons = () => {
    return this.props.topics.map(topic => {
      return <button className="btn btn-primary">{topic.title}</button>;
    });
  };

  render() {
    return (
      <div>
        <h1>Topic List</h1>
        {this.renderButtons()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topics: state.topic
  };
};
export default connect(
  mapStateToProps,
  { fetchTopics }
)(TopicList);
