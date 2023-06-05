import React from 'react';
import AccommodationsData from '../utils/datas/accommodationsData.json';
import Card from "./Card";

const Gallery = () => {

  return (
      <div className="gallery">
        <div className="grid-card">
          {AccommodationsData.map((accommodation) => (
              <Card accommodation={accommodation} key={accommodation.id}/>)
          )}
        </div>
      </div>
  );
};

export default Gallery;


