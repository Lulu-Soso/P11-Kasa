import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";

const About = () => {
  return (
      <div>
        <Header />
        <div className="about-container">
          <Dropdown
              contentReliability="hello"
              currentPage="about"
          />

        </div>
        <Footer />
      </div>
  );
};

export default About;
