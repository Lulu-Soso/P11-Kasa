import React from 'react';
import Header from "../components/Header";
import AccommodationsData from '../utils/datas/accommodationsData.json'
import {useParams} from "react-router-dom";
import Slideshow from "../components/Slideshow";
import accommodations from "../components/Accommodations";
import Footer from "../components/Footer";
import TitleAccommodation from "../components/TitleAccommodation";
import LocationAccommodation from "../components/LocationAccommodation";
import TagAccommodation from "../components/TagAccommodation";
import Rating from "../components/rating";

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
          <Header />
          <h1>Logement introuvable</h1>
        </div>
    );
  }

  return (
      <div>
      <div className="container">
        <Header />
        <Slideshow slides={selectedAccommodation.pictures}  />
        <div className="infos">
          <div className="infos-left">
            <TitleAccommodation title={selectedAccommodation.title} />
            <LocationAccommodation location={selectedAccommodation.location} />
            <TagAccommodation tag={selectedAccommodation.tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))} />


          </div>
          <div className="infos-right">
            <p>Alexandre Dumas</p>
            <Rating />
          </div>

        </div>
      </div>
        <Footer />

      </div>
  );
};

export default Accommodation;

