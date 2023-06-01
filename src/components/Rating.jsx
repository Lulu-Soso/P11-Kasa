import React from 'react';
import starRed from '../assets/img/star-red.png';
import starGrey from '../assets/img/star-grey.png';

const Rating = ({ rating }) => {
  const maxRating = 5; // Nombre maximal d'étoiles
  const filledStars = Math.round(rating); // Nombre d'étoiles pleines

  const renderStars = () => {
    const stars = [];

    // Générer les étoiles pleines
    for (let i = 0; i < filledStars; i++) {
      stars.push(<img src={starRed} key={i} className="star-red" alt="étoile notation" />);
    }

    // Générer les étoiles vides pour compléter la notation sur 5 étoiles
    const remainingStars = maxRating - filledStars;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<img src={starGrey} key={`empty-${i}`} className="star-grey" alt="étoile notation" />);
    }

    return stars;
  };

  return <div className="stars">{renderStars()}</div>;
};

export default Rating;
