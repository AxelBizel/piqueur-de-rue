import React, { Component } from "react";
import { Parallax } from 'react-parallax';
import ButtonOpenFormGuests from "./ButtonOpenFormGuests";
import { Container, Col, Row, Spinner } from "reactstrap";
import ModalContactGuest from "./modalContactGuest";
import ButtonPortfolioGuest from "./ButtonPortfolioGuest";
import axios from "axios";
import "./GuestHome.css";
import "aos/dist/aos.css";

class GuestHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      portfolios: null
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
    const { portfolios } = this.state;
    return (
      <div>
        <h1 className="HeaderSectionGuest">
          <div className="FirstLineGuest" data-aos="fade-right">
            Guest
          </div>
          <div className="SecondLineGuest" data-aos="fade-left">
            spot
          </div>
        </h1>
        <Container>
          <Row>
            {portfolios === null ? (
              <div className="Guests-Loader">
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
              </div>
            ) : (
              portfolios.map(portfolio => (
                <Col xs="12">
                  <div
                    className="Guests"
                    key={portfolio.id}
                    style={{
                      margin: "2vh auto",
                      backgroundImage: `url(${require("../img/tatoueurs/portraits-500px/" +
                        `${portfolio.id}` +
                        ".jpg")})`
                    }}
                  >
                    <Row>
                      <Col xs="12">
                        <div className="GuestText">
                          <h4>Next guest</h4>
                          <h3 className="Title-Guest">{portfolio.pseudo}</h3>

                          <p className="TextSub">
                            Du {portfolio.startdate} au {portfolio.enddate}.
                          </p>
                          <ButtonPortfolioGuest portfolio={portfolio} />
                        </div>
                      </Col>
                      <Col xs="12"></Col>
                    </Row>
                  </div>
                </Col>
              ))
            )}
          </Row>
          <Parallax
            bgImage={require("../img/agency/5.jpg")}
            bgImageAlt="guest section"
            strength={400}
          >
            <div className="SectionGuestContainer">
              <Row>
                <Col xs="12" md="6">
                  <div className="GuestTextSpot">
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
                <ButtonOpenFormGuests />  
              </Row>
            </div>
          </Parallax>
        </Container>
      </div>
    );
  }
}

export default GuestHome;
