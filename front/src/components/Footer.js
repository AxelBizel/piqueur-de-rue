import React, { Component } from "react";
import logo from "../img/logo/logoPiqueurWhiteFooter.png";
import logoFB from "../img/logo/logoFB.png";
import logoIG from "../img/logo/logoIG.png";
import { Container, Row, Col } from "reactstrap";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <Container>
            <Row>
              <Col xs="12" lg="4">
                <div className="adresse" data-aos="fade-right">
                  <img className="logo" src={logo} alt="logo Piqueur de rue" />
                  <p>
                    contact@piqueurderue.com
                    <br />
                    Piqueur de Rue
                    <br />
                    45 Quai de Pierre-Scize
                    <br />
                    69009 Lyon
                    <br />
                  </p>
                  <div className="RS">
                    <a
                      href="https://www.facebook.com/piqueurderue/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="logoRS" src={logoFB} alt='Facebook logo'/>
                    </a>
                    <a
                      href="https://www.instagram.com/piqueurderue/?hl=fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="logoRS" src={logoIG} alt='Instagram logo'/>
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs="12" lg="8">
                <iframe
                  className="map"
                  title="GoogleMaps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.248727350261!2d4.816656050991151!3d45.76620532115945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb08712c38c3%3A0x923df72aae138019!2sPiqueur%20de%20rue!5e0!3m2!1sfr!2sfr!4v1576071247997!5m2!1sfr!2sfr"
                  data-aos="fade-left"
                  data-aos-duration="500"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
