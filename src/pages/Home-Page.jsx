import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
      <div>
        <div className="container">
          <Header/>
          <Banner currentPage="/"/>
          <Gallery />
        </div>
        <Footer/>
      </div>
  );
};

export default HomePage;
