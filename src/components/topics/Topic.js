import React, { Component } from 'react';
import Subjects from '../../containers/Subjects';

export default class Topic extends Component {
  render() {
    const { topic, id } = this.props.match.params;
    console.log(topic, id);
    return (
      <>
        <div className="jumbotron">
          <h1>{topic}</h1>
        </div>
        <Subjects id={id} />
      </>
    );
  }
}
