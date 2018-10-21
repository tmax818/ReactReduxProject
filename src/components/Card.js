import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="card text-center">
        <h5 class="card-title">Card title</h5>
        <div className="card-body" />
        <div className="card-footer">
          <button type="button" class="btn btn-danger">
            Danger
          </button>
          <button type="button" class="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
        </div>
      </div>
    );
  }
}
