import React from 'react';
import logoKasa from '../assets/img/LOGO.png'
import {Link} from "react-router-dom";

const Logo = () => {
  return (
      <div className="logo">
        <Link to="/">
          <img src={logoKasa} alt="logo Kasa"/>
        </Link>
      </div>
  );
};

export default Logo;
