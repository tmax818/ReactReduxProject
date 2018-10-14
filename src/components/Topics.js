import React, { Component } from 'react';
import TopicForm from './TopicForm';
import { connect } from 'react-redux';
import createTopic from '../actions';

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
    this.props.createTopic(this.state.topic);
    this.setState({ topic: '' });
    console.log(this.state);
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
        {this.props.topics}
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
  { createTopic }
)(Topics);
