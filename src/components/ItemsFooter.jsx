import React from 'react';
import footerLogo from "../assets/img/footer-logo.png";

const ItemsFooter = () => {
  return (
      <div className="footer">
        <div className="footer-items">
          <img src={footerLogo} alt=""/>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
  );
};

export default ItemsFooter;
