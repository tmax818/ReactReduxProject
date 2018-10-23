import React from 'react';
import Subjects from '../../containers/Subjects';

const Topic = props => {
  return (
    <>
      <div className="jumbotron">
        <h1>{props.location.state.title} Topic.js</h1>
      </div>
      <Subjects props={props} />
    </>
  );
};

export default Topic;
