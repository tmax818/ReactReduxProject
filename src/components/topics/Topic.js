import React, { Component } from 'react';
import Subjects from '../../containers/Subjects';

export default class Topic extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="jumbotron">
          <h1>Topic</h1>
        </div>
        <Subjects props={this.props} />
      </>
    );
  }
}
