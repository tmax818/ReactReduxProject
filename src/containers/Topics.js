import React, { Component } from 'react';
import NewForm from '../components/common/NewForm';
import TopicList from '../components/topics/TopicList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { postTopic, fetchTopics } from '../actions';

class Topics extends Component {
  state = {
    input: ''
  };

  componentDidMount() {
    this.props.fetchTopics();
  }

  renderButtons = () => {
    return this.props.topics.map(topic => {
      return (
        <Link
          key={topic.id}
          to={`/${topic.title}/${topic.id}`}
          className="btn btn-primary"
        >
          {topic.title}
        </Link>
      );
    });
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
      <div className="jumbotron">
        <TopicList
          topics={this.props.topics}
          renderButtons={this.renderButtons}
        />
        <NewForm
          value={this.state.input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    topics: state.topics
  };
};

const mapDispathtoProps = dispatch => {
  return {
    postTopic: topic => {
      dispatch(postTopic(topic));
    },

    fetchTopics: () => {
      dispatch(fetchTopics());
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(Topics);
