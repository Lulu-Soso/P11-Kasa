import React, {useEffect, useState} from 'react';
import AccommodationData from '../utils/datas/accommodationsData.json';
import Card from "./Card";

const Accommodations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(AccommodationData);
  }, []);

  return (
      <div>
        <ul className="grid-card">
          {data.map((accommodation) => (
              <li>
                <Card accommodation={accommodation} key={accommodation.id}/>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default Accommodations;


