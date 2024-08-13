import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-4xl font-bold">{content}</p>
    </div>
  );
};

export default Card;
