import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Banner from "../components/Banner";

const AboutPage = () => {
  return (
      <div>
        <Header />
        <Banner currentPage="about"/>
          <Dropdown
              currentPage="about"
          />
        <Footer />
      </div>
  );
};

export default AboutPage;
