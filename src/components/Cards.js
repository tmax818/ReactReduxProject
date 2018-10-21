import React from 'react';
const Cards = ({ match }) => {
  const { subject } = match.params;
  return (
    <div>
      <h1>{subject} Cards</h1>
    </div>
  );
};

export default Cards;
