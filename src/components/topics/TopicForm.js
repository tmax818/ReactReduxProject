import React, { Component } from 'react';

export default class TopicForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            value={this.props.title}
            type="text"
            onChange={this.props.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Create New Topic
          </button>
        </form>
      </div>
    );
  }
}
