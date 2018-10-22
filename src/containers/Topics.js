import React, { Component } from 'react';
import NewForm from '../components/common/NewForm';
import TopicList from '../components/topics/TopicList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { postTopic, fetchTopics } from '../actions';

class Topics extends Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  renderButtons = () => {
    return this.props.topics.map(topic => {
      return (
        <Link
          key={topic.id}
          to={{
            pathname: `/topics/${topic.id}`,
            state: { title: topic.title, topic_id: topic.id }
          }}
          className="btn btn-primary"
        >
          {topic.title}
        </Link>
      );
    });
  };

  render() {
    return (
      <div className="jumbotron">
        <TopicList
          topics={this.props.topics}
          renderButtons={this.renderButtons}
        />
        <NewForm postTopic={this.props.postTopic} />
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
