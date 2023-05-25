import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../assets/LOGO.png'

function Header(props) {
    return (
        <div>
            <Link to="/">
                <img src={Logo}  alt="logo"/>
            </Link>
            <div>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
            </div>
        </div>
    )
}

export default Header;
