import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Banner from "../components/Banner";

const AboutPage = () => {
  return (
      <div>
        <div className="container">
          <Header/>
          {/*<div className="banner-about">*/}
          <Banner currentPage="about"/>
          {/*</div>*/}
          <Dropdown currentPage="about"/>
        </div>
        <Footer/>
      </div>
  );
};

export default AboutPage;
