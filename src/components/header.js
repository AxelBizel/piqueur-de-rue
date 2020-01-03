import React from 'react';
import './header.css'
import logo from '../img/logo/logoMakeyourwish.png';

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} />
        </div>
    );
}