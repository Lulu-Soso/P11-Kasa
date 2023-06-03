import React from 'react';
import bannerHome from '../assets/img/bannerHome.png'
import bannerAbout from '../assets/img/bannerAbout.png'

const Banner = ({currentPage}) => {
  const shouldShowBannerHome = currentPage === '/';
  const shouldShowBannerAbout = currentPage === 'about';

  return (
      <div>
        {shouldShowBannerHome && (
            <div className="banner">
            <div className="banner-container">
              <div className="banner-cover">
                <img src={bannerHome} alt="image banner de la page d'accueil"/>
              </div>
              <h1>Chez vous, partout et ailleurs</h1>
            </div>
            </div>
        )}

        {shouldShowBannerAbout && (
            <div className="banner-about">
            <div className="banner-about-container">
              <div className="banner-cover">
                <img src={bannerAbout} alt="image banner de la page A propos"/>
              </div>
            </div>
            </div>
        )}
      </div>
  );
};

export default Banner;
