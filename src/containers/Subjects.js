import React, { Component } from 'react';
import NewSubjectForm from '../components/common/NewSubjectForm';
import { connect } from 'react-redux';
import { fetchSubjects, postSubject } from '../actions';
import { Link } from 'react-router-dom';

class Subjects extends Component {
  componentDidMount() {
    this.props.fetchSubjects(this.props.props.match.params.id);
  }

  renderButtons = () => {
    return this.props.subjects.map(subject => {
      return (
        <Link
          key={subject.id}
          to={{
            pathname: `/topics/${subject.topic.id}/subjects/${subject.id}`,
            state: { title: subject.title }
          }}
          className="btn btn-primary"
        >
          {subject.title}
        </Link>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Subjects</h1>
        {this.renderButtons()}
        <NewSubjectForm
          topic_id={this.props.props.match.params.id}
          postFunc={this.props.postSubject}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    subjects: state.subjects
  };
};

const mapDispathtoProps = dispatch => {
  return {
    postSubject: (topic_id, subject) => {
      dispatch(postSubject(topic_id, subject));
    },

    fetchSubjects: id => {
      dispatch(fetchSubjects(id));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(Subjects);
