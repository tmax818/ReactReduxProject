import React, { Component } from 'react';

export default class TopicForm extends Component {
  state = {
    title: ''
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`saveing: ${this.state.title}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Create New Topic
          </button>
        </form>
      </div>
    );
  }
}
