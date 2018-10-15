import React, { Component } from 'react';
import TopicForm from './TopicForm';
import TopicList from './TopicList';
import { connect } from 'react-redux';
import { postTopic } from '../actions';

class Topics extends Component {
  state = {
    topic: ''
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      topic: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postTopic(this.state.topic);
    this.setState({ topic: '' });
  };
  render() {
    return (
      <div className="jumbotron">
        <h1>Create New Topic</h1>
        <TopicForm
          value={this.state.topic}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TopicList />
      </div>
    );
  }
}

const mapDispatchtoProps = state => {
  return {
    topics: state.topic
  };
};

export default connect(
  mapDispatchtoProps,
  { postTopic }
)(Topics);
