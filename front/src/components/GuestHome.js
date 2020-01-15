import React, { Component } from "react";
import AOS from 'aos'
import { Container, Col, Row } from "reactstrap";
import { Parallax, Background } from 'react-parallax';
import ModalContactGuest from "./modalContactGuest";
import "./GuestHome.css";
import 'aos/dist/aos.css';

class GuestHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  openModal = e => {
    let { showModal } = this.state;
    e.preventDefault();
    showModal = true;
    this.setState({ showModal });
  };

  closeModal = () => {
    let { showModal } = this.state;
    showModal = false;
    this.setState({ showModal });
  };

  render() {
    return (
      <div>
        <h1 className="HeaderSectionGuest">
          <div className="FirstLineGuest" data-aos="fade-right" data-aos-offset="1100" data-aos-duration="1000">Guest</div>
          <div className="SecondLineGuest" data-aos="fade-left" data-aos-offset="1100" data-aos-duration="1000">spot</div>
        </h1>
          <Parallax
            bgImage={require('../img/agency/5.jpg')}
            bgImageAlt="the cat"
            strength={400}
          >
        <div className="SectionGuestContainer">
        <Container>
            <Row>
              <Col xs="12" md="6">
                <div className="GuestText">
                  <h3 className="Title-Guest">DEVENEZ GUEST</h3>

                  <p className="TextSub">
                    Vous êtes tatoueur et vous cherchez un salon sur Lyon pour
                    venir faire un guest. Contactez nous et obtenez votre code
                    d'accès pour planifier votre venu, recevoir les infos sur le
                    fonctionnement du shop ainsi que la gestion de votre image.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <button className="buttonContactProject" onClick={this.openModal}>
                Contactez-nous
              </button>
              <ModalContactGuest
                showModal={this.state.showModal}
                closeModal={this.closeModal}
              />
            </Row>
        </Container>
        </div>
          </Parallax>
      </div>
    );
  }
}

export default GuestHome;
