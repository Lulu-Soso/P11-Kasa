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
        {/*{data.map((accommodation) => (*/}
        {/*    <div key={accommodation.id}>*/}
        {/*      <img src={accommodation.cover} alt={accommodation.title} />*/}
        {/*      <h2>{accommodation.title}</h2>*/}
        {/*      <p>{accommodation.location}</p>*/}
        {/*      <p>{accommodation.host.name}</p>*/}
        {/*      <p>{accommodation.rating}</p>*/}
        {/*      <p>{accommodation.description}</p>*/}
        {/*      <h3>Equipments:</h3>*/}
        {/*      <ul>*/}
        {/*        {accommodation.equipments.map((equipment) => (*/}
        {/*            <li key={equipment}>{equipment}</li>*/}
        {/*        ))}*/}
        {/*      </ul>*/}
        {/*      <h3>Tags:</h3>*/}
        {/*      <ul>*/}
        {/*        {accommodation.tags.map((tag) => (*/}
        {/*            <li key={tag}>{tag}</li>*/}
        {/*        ))}*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*))}*/}
      </div>
  );
};

export default Accommodations;


