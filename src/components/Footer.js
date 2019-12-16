import React from "react";
import logo from "../img/logo/logoPiqueurWhiteFooter.png";

const footerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "Center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "black"
};

const mapStyle = {
  width: "100vw",
  height: "50vh",
  frameborder: "0",
  border: "0"
};

const logoStyle = {
  height: "30vh",
  padding: "2vh"
};

export default function Footer() {
  return (
    <div className="footer" style={footerStyle}>
      <img src={logo} style={logoStyle} alt="logo Piqueur de rue" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.248727350261!2d4.816656050991151!3d45.76620532115945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb08712c38c3%3A0x923df72aae138019!2sPiqueur%20de%20rue!5e0!3m2!1sfr!2sfr!4v1576071247997!5m2!1sfr!2sfr"
        style={mapStyle}
      ></iframe>
    </div>
  );
}
