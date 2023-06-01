import React, {useEffect, useState} from 'react';
import AccommodationsData from '../utils/datas/accommodationsData.json';
import Card from "./Card";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(AccommodationsData);
  }, []);

  return (
        <div className="gallery">
        <div className="grid-card">
          {data.map((accommodation) => (
              <li>
                <Card accommodation={accommodation} key={accommodation.id}/>
              </li>
          ))}
        </div>
      </div>
  );
};

export default Gallery;


