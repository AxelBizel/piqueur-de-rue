import React from 'react';
import logo from '../img/logo/logoMakeyourwish.png';

const HeaderStyle= {
    position: "absolute",
    display: "flex",
    justifyContent: "Center",
    alignItems: "Center",
    width: "100vw",
    height: "101vh",
    backgroundColor: "black",
    opacity: "0",
}

export default function Header() {
    return (
        <div className="header" style={HeaderStyle}>
            <img className="logoheader" src={logo} alt={"MakeYourWishLogo"}/>
        </div>
    );
}