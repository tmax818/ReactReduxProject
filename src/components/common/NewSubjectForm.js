import React, { Component } from 'react';

class NewSubjectForm extends Component {
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
    this.props.postFunc(this.props.topic_id, this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <div>
        <h1>Create New Subject</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Create New Subject
          </button>
        </form>
      </div>
    );
  }
}
export default NewSubjectForm;
