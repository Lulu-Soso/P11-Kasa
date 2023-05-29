import React from 'react';
import { useNavigate } from "react-router-dom";

const Card = ({accommodation}) => {
  // console.log(accommodation)
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`Navigating to accommodation with ID: ${accommodation.id}`);
    navigate(`/accommodation/${accommodation.id}`);
  };

  return (
      <li className="card" onClick={handleClick}>
        <div className="card-overlay">
          <img src={accommodation.cover} alt=""/>
        </div>
        <h2 className="card-title">{accommodation.title}</h2>
      </li>
  );
};

export default Card;
