import React from 'react';
import logo from './IMG/logoMakeyourwish.png';

const headerStyle = {
    display : "flex",
    justifyContent : "Center",
    alignItems : "Center",
    width : "100vw",
    height : "100vh",
    backgroundColor : "black",
}

const logoStyle = {
    maxHeight : "70vh"
}

export default function Header() {
    return (
        <div className="header" style={headerStyle}>
            <img src={logo} style={logoStyle} />
        </div>
    );
}