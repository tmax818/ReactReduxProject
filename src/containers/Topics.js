import React, { Component } from 'react';
import TopicForm from '../components/TopicForm';
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
    this.props.postTopic(this.props.topics);
    this.setState({ topic: '' });
  };
  render() {
    return (
      <div className="jumbotron">
        <h1>Create New Topic</h1>
        <TopicForm
          value={this.state.topics}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TopicList />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    topics: state.topic
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    postTopic: () => {
      dispatch(postTopic());
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Topics);
