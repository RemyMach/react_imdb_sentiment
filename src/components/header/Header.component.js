import React, {useEffect, useState} from "react";
import arrowBack from '../../assets/arrow_back.svg';
import './Header.css'
import Link from "../route/Link.component"

function Header() {

    return (
        <>
        {window.location.pathname !== '/' ? <Link href="/" className="header-content"><img className='arrow' alt="fleche retour arrière" src={arrowBack} /><p id="menu-text">Menu</p></Link> : <span>''</span>}
        </>
    );
}

export default Header;
