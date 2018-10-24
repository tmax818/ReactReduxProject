import React, { Component } from 'react';

class TopicList extends Component {
  render() {
    return (
      <div>
        <h1>TopicList.js</h1>
        {this.props.renderButtons()}
      </div>
    );
  }
}

export default TopicList;
