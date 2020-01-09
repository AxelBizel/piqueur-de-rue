import React from "react";
import logo from "../img/logo/logoPiqueurWhiteFooter.png";
import logoFB from '../img/logo/logoFB.png'
import logoIG from '../img/logo/logoIG.png'
import './footer.css'


export default function Footer() {
  return (
    <div>
      <h1 className="HeaderSection">OÙ NOUS TROUVER</h1>
      <div className="footer">
            <div className="adresse">
              <img className="logo" src={logo} alt="logo Piqueur de rue" /><p>contact@piqueurderue.com<br/>Piqueur de Rue<br/>45 Quai de Pierre-Scize<br/>69009 Lyon<br/></p>
              <div className="RS"><a href="https://www.facebook.com/piqueurderue/" target="_blank" rel="noopener noreferrer"><img className="logoRS" src={logoFB} alt={"FacebookLogo"}/></a><a href="https://www.instagram.com/piqueurderue/?hl=fr" target="_blank" rel="noopener noreferrer"><img className="logoRS" src={logoIG} alt={"InstagramLogo"}/></a></div>
            </div>
      </div>
      <div className="flexcontainermap">
        <iframe className="map" title="GoogleMaps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.248727350261!2d4.816656050991151!3d45.76620532115945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb08712c38c3%3A0x923df72aae138019!2sPiqueur%20de%20rue!5e0!3m2!1sfr!2sfr!4v1576071247997!5m2!1sfr!2sfr"
        ></iframe>
      </div>
    </div>
  );
}
