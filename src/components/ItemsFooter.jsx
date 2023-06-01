import React from 'react';
import footerLogo from "../assets/img/footer-logo.png";
import {Link} from "react-router-dom";

const ItemsFooter = () => {
  return (
      <div className="footer">
        <div className="footer-items">
          <Link to="/">
            <img src={footerLogo} alt="logo Kasa"/>
          </Link>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
  );
};

export default ItemsFooter;
