import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTopics } from "../actions";
import { Link } from "react-router-dom";

class TopicList extends Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  renderButtons = () => {
    console.log(this.props);
    return this.props.topics.map(topic => {
      return (
        <Link to={`/${topic.title}`} className="btn btn-primary" key={topic.id}>
          {topic.title}
        </Link>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Topic List</h1>
        {this.renderButtons()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topics: state.topics
  };
};

export default connect(
  mapStateToProps,
  { fetchTopics }
)(TopicList);
