import React from 'react';
import { useNavigate } from "react-router-dom";

const Card = ({accommodation}) => {
  // console.log(accommodation)
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/accommodation/${accommodation.id}`);
    // console.log(`Navigating to accommodation with ID: ${accommodation.id}`);
  };

  return (
      <div className="card" onClick={handleClick}>
        <div className="card-overlay">
          <img src={accommodation.cover} alt="image bannière"/>
        </div>
        <div className="card-title-container">
        <h2>{accommodation.title}</h2>
        </div>
      </div>
  );
};

export default Card;
