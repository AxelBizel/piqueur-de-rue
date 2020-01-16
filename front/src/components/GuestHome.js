import React, { Component } from "react";
import { Container, Col, Row, Spinner } from "reactstrap";
import { Parallax, Background } from "react-parallax";
import ModalContactGuest from "./modalContactGuest";
import axios from "axios";
import ButtonOpenPortfolio from "./ButtonOpenPortfolio";
import "./GuestHome.css";
import "aos/dist/aos.css";

class GuestHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      portfolios:null
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

  componentDidMount() {
    axios.get(`http://localhost:5000/api/portfolio/guest`).then(res => {
      const portfoliosData = res.data;
      this.setState({ portfolios: portfoliosData });
      console.log(this.state);
    });
  }

  

  render() {
    const {portfolios} = this.state
    return (
      <div>
        <h1 className="HeaderSectionGuest">
          <div
            className="FirstLineGuest"
            data-aos="fade-right"
            data-aos-offset="1100"
            data-aos-duration="1000"
          >
            Guest
          </div>
          <div
            className="SecondLineGuest"
            data-aos="fade-left"
            data-aos-offset="1100"
            data-aos-duration="1000"
          >
            spot
          </div>
        </h1>
        <Container>

        <Row>
            {portfolios === null ? (
              <div className="Artists-Loader">
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
              </div>
            ) : (
              portfolios.map(portfolio => (
                <Col xs="12">
                  <div
                    className="Artists"
                    key={portfolio.id}
                    style={{
                      margin: "2vh auto",
                      backgroundImage: `url(${require("../img/tatoueurs/portraits-500px/" +
                        `${portfolio.id}` +
                        ".jpg")})`
                    }}
                  >
                    <ButtonOpenPortfolio portfolio={portfolio} />
                  </div>
                </Col>
              ))
            )}
          </Row>




          <Parallax
            bgImage={require("../img/agency/5.jpg")}
            bgImageAlt="the cat"
            strength={400}
          >
            <div className="SectionGuestContainer">
              <Row>
                <Col xs="12" md="6">
                  <div className="GuestText">
                    <h3 className="Title-Guest">DEVENEZ GUEST</h3>

                    <p className="TextSub">
                      Vous êtes tatoueur et vous cherchez un salon sur Lyon pour
                      venir faire un guest. Contactez nous et obtenez votre code
                      d'accès pour planifier votre venu, recevoir les infos sur
                      le fonctionnement du shop ainsi que la gestion de votre
                      image.
                    </p>
                  </div>
                </Col>
                <Col xs="12" md="6"></Col>
              </Row>
              <Row>
                <button
                  className="buttonContactProject"
                  onClick={this.openModal}
                >
                  Contactez-nous
                </button>
                <ModalContactGuest
                  showModal={this.state.showModal}
                  closeModal={this.closeModal}
                />
              </Row>
            </div>
          </Parallax>
        </Container>
      </div>
    );
  }
}

export default GuestHome;
