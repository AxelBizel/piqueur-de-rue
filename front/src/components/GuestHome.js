import React, { Component } from "react";
import { Parallax } from "react-parallax";
import ButtonOpenFormGuests from "./ButtonOpenFormGuests";
import { Container, Col, Row, Spinner } from "reactstrap";
import ButtonPortfolioGuest from "./ButtonPortfolioGuest";
import axios from "axios";
import "./GuestHome.css";
import { IPserver } from "../conf/confIP";

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
    axios.get(`${IPserver}/api/portfolio/guest/active`).then(res => {
      const portfoliosData = res.data;
      this.setState({ portfolios: portfoliosData });
    });
  }

  render() {
    const { portfolios } = this.state;
    return (
      <Container>
        <h1 className="HeaderSection">
          <div className="FirstTitleLineGuest" data-aos="fade-right">
            Guest
          </div>
          <div className="SecondTitleLineGuest" data-aos="fade-left">
            spot
          </div>
        </h1>
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
              <Col xs="12" key={portfolio.id}>
                <div
                  className="SectionGuest"
                  style={{
                    margin: "2vh auto",
                    backgroundImage:
                      `url(${IPserver}/img/` +
                      `${portfolio.id}` +
                      `/portrait.jpg)`
                  }}
                >
                  <Row>
                    <Col xs="12">
                      <div className="GuestText">
                        <h5 style={{ margin: 0 }}>Next guest</h5>
                        <h3 className="Title-Guest">{portfolio.pseudo}</h3>

                        <p
                          className="TextSub"
                          style={{
                            fontFamily: "anodina_regular",
                            marginTop: "2vh",
                            fontSize: "1.2em"
                          }}
                        >
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
          <div className="SectionGuestSpot">
            <Row>
              <Col xs="12" md="6">
                <div className="GuestTextSpot">
                  <h3 className="Title-Guest">Devenez Guest</h3>

                  <p className="TextSub">
                    Vous êtes tatoueur et vous cherchez un salon sur Lyon pour
                    venir faire un guest. Contactez nous et obtenez votre code
                    d'accès pour planifier votre venu, recevoir les infos sur le
                    fonctionnement du shop ainsi que la gestion de votre image.
                  </p>
                  <ButtonOpenFormGuests />
                </div>
              </Col>
              <Col xs="12" md="6"></Col>
            </Row>
          </div>
        </Parallax>
      </Container>
    );
  }
}

export default GuestHome;
