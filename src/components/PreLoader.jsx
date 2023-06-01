import React from 'react';
import logo from "../assets/img/LOGO.png";

const PreLoader = () => {

  return (
      <div>
        <div className="loading-screen">
          <div className="loading">
            <span>
              <img src={logo} alt="Logo"/>
            </span>
          </div>
        </div>
      </div>
  );
};

export default PreLoader;
