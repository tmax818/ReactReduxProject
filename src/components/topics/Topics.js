import React, { Component } from 'react';
import TopicForm from './TopicForm';

class Topics extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Topic List</h1>
        <button className="btn btn-primary">View Popular Topics</button>
        <h1>Create New Topic</h1>
        <TopicForm />
      </div>
    );
  }
}
export default Topics;
