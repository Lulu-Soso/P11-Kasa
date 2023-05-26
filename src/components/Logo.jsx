import React from 'react';

const Logo = () => {
  return (
      <div className="logo">
        {/*Les images importées depuis la balise img sont accessibles dans "public"*/}
        <img src="./LOGO.png" alt="logo Kasa"/>
      </div>
  );
};

export default Logo;
