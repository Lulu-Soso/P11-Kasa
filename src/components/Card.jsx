import React from 'react';

const Card = ({accommodation}) => {
  console.log(accommodation)
  return (
      <li className="card">
        <div className="card-overley">
          <img src={accommodation.cover} alt=""/>
        </div>
        <h2 className="card-title">{accommodation.title}</h2>
      </li>
  );
};

export default Card;
