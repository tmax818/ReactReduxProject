import React from 'react';

const TopicList = props => {
  return (
    <div>
      <h1>Topic List</h1>
      {props.renderButtons()}
    </div>
  );
};

export default TopicList;
