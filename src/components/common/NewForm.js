import React, { Component } from 'react';

class NewForm extends Component {
  state = {
    input: ''
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postTopic(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <div>
        <h1>Create New Topic</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
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
export default NewForm;
