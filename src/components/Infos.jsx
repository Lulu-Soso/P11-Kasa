import React from 'react';
import Rating from "./rating";

const Infos = ({ title, location, tags, host, rating}) => {
  const { name, picture } = host;
  const [firstName, lastName] = name.split(' ');

  return (
      <div className="infos-container">
        <div className="infos-left">
          <h1>{title}</h1>
          <p className="location">{location}</p>
          <ul className="tags">
            {tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
            ))}
          </ul>
        </div>
        <div className="infos-right">
          <div className="host">
            <div className="hostname">
              <p>{firstName}</p>
              <p>{lastName}</p>
            </div>
            <img src={picture} alt={name} />
          </div>
            <Rating rating={rating} />
        </div>

      </div>
  );
};

export default Infos;

