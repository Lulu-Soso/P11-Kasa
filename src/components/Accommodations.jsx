import React, { useState, useEffect } from 'react';
import AccommodationData from '../utils/datas/accommodationsData.json';

const Accommodations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(AccommodationData);
  }, []);

  return (
      <div>
        <h1>Logements</h1>
        {data.map((accommodation) => (
            <div key={accommodation.id}>
              <img src={accommodation.cover} alt={accommodation.title} />
              <h2>{accommodation.title}</h2>
              <p>{accommodation.location}</p>
              <p>{accommodation.host.name}</p>
              <p>{accommodation.rating}</p>
              <p>{accommodation.description}</p>
              <h3>Equipments:</h3>
              <ul>
                {accommodation.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                ))}
              </ul>
              <h3>Tags:</h3>
              <ul>
                {accommodation.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
        ))}
      </div>
  );
};

export default Accommodations;


