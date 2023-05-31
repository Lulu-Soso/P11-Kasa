import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Banner from "../components/Banner";

const About = () => {
  return (
      <div>
        <Header />
        <Banner currentPage="about"/>
        {/*<div className="about-container">*/}
          <Dropdown
              currentPage="about"
          />
        {/*</div>*/}
        <Footer />
      </div>
  );
};

export default About;
