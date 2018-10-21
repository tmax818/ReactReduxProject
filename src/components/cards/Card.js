import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card text-center">
        <h2 class="card-title">Card title</h2>
        <div className="card-body" />
        <button type="button" className="btn btn-secondary btn-sm">
          Show Answer
        </button>
      </div>
    );
  }
}
export default Card;
