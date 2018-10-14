import React, { Component } from 'react';
import TopicForm from './TopicForm';
import { connect } from 'react-redux';

class Topics extends Component {
  state = {
    title: ''
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`saveing: ${this.state.title}`);
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
export default connect()(Topics);
