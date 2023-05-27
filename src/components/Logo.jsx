import React from 'react';
import logoKasa from '../assets/img/LOGO.png'

const Logo = () => {
  return (
      <div className="logo">
        {/*Les images importées depuis la balise img sont accessibles dans "public"*/}
        <img src={logoKasa} alt="logo Kasa"/>
      </div>
  );
};

export default Logo;
