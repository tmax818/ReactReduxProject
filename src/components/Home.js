import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display">Home</h1>
        <button className="btn btn-primary">Create New Topic</button>
        <button className="btn btn-primary">View Popular Topics</button>
      </div>
    );
  }
}

export default Home;
