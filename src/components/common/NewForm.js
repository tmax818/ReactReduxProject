import React, { Component } from 'react';

class TopicForm extends Component {
  render() {
    return (
      <div>
        <h1>Create New Topic</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input
            value={this.props.value}
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
export default TopicForm;
