import React, { Component } from 'react';
import DataButtons from './DataButtons';

class Card extends Component {
  render() {
    return (
      <div className="card text-center">
        <h2 className="card-title">Card title</h2>
        <div className="card-body" />
        <button type="button" className="btn btn-secondary btn-sm">
          Show Answer
        </button>
        <DataButtons />
      </div>
    );
  }
}
export default Card;
