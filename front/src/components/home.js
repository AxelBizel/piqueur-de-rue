import React from 'react';
import logo from '../img/logo/logoPiqueurWhite.png'
import './home.css'

export default function Home() {
    return (
        <div className="containerHome">
            <img className="HomeLogo" src={logo} />
        </div>
    )
}