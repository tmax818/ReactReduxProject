import React, { Component } from 'react';

export default class DataButtons extends Component {
  render() {
    return (
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-danger">
          No
        </button>
        <button type="button" className="btn btn-warning">
          Maybe
        </button>
        <button type="button" className="btn btn-success">
          Yes!
        </button>
      </div>
    );
  }
}
