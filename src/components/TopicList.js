import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions';

class TopicList extends Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    console.log(this.props.topics);
    return (
      <div>
        <h1>Topic List</h1>
        {this.props.topics.map(topic => {
          return <button key={topic.id}>{topic.title}</button>;
        })}
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
