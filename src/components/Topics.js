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
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTopic(this.state.topic);
  };
  render() {
    return (
      <div className="jumbotron">
        <h1>Create New Topic</h1>
        <TopicForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatchtoProps = state => {};
export default connect(
  mapDispatchtoProps,
  { createTopic }
)(Topics);
