import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '200px', textAlign: 'center' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;

