import React, {useEffect, useState} from "react";
import arrowBack from '../../assets/arrow_back.svg';
import './Header.css'

function Header() {

    const handleBackMenu = () => {
        window.location.pathname = "/";
    }
    return (
        <>
        {window.location.pathname !== '/' ? <span onClick={handleBackMenu} id="header-content"><img className='arrow' alt="fleche retour arrière" src={arrowBack} /><p id="menu-text">Menu</p></span> : <span>''</span>}
        </>
    );
}

export default Header;
