import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubjects } from '../actions';
import { Link } from 'react-router-dom';

class Subjects extends Component {
  componentDidMount() {
    this.props.fetchSubjects(this.props.id);
  }

  renderButtons = () => {
    return this.props.subjects.map(subject => {
      return (
        <Link
          key={subject.id}
          to={`/topics/${subject.title}/${subject.id}`}
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
    fetchSubjects: id => {
      dispatch(fetchSubjects(id));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps
)(Subjects);
