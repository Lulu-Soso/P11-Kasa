import React from 'react';
import Header from "../components/Header";
import AccommodationsData from '../utils/datas/accommodationsData.json'
import {useParams} from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import Infos from "../components/Infos";
import Collapse from "../components/Collapse";

console.log(AccommodationsData)
const Accommodation = () => {
  const {id} = useParams()

  // Trouver le logement correspondant à l'Id dans les données'
  const selectedAccommodation = AccommodationsData.find(
      (accommodation) => accommodation.id === id
  )

  if (!selectedAccommodation) {
    // Gérer le cas où le logement n'est pas trouvé
    return (
        <div>
          <Header/>
          <h1>Logement introuvable</h1>
        </div>
    );
  }

  return (
      <div>
        <div className="container">
          <Header/>
          <Slideshow slides={selectedAccommodation.pictures}/>
          <Infos
              title={selectedAccommodation.title}
              location={selectedAccommodation.location}
              tags={selectedAccommodation.tags}
              host={selectedAccommodation.host}
              rating={selectedAccommodation.rating}
          />
          <Collapse />
        </div>
        <Footer/>

      </div>
  );
};

export default Accommodation;

