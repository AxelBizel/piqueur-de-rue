import React, { Component } from "react";
import "./modalPortfolio.css";
import timmy_rodger from "../img/tatoueurs/portraits-500px/timmy_rodger.jpg";
import insta from "../img/logo/logoIG.png";
import ButtonOpenFormTatoueurs from "./ButtonOpenFormTatoueurs";
import { Container, Row, Col } from "reactstrap";
import GalleryPortfolio from "./GalleryPortfolio";

class ModalPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { showModal } = this.props;
    return (
      <>
        <div
          className="firstModalPortfolio"
          style={{ display: showModal ? "flex" : "none" }}
          onClick={() => this.props.closeModal()}
        ></div>
        {showModal ? (
          <aside className="secondModalPortfolio" role="dialog">
            <div className="close-container" onClick={this.props.closeModal}>
              <div className="leftright"></div>
              <div className="rightleft"></div>
              <label className="close"></label>
            </div>

            <Container>
              <Row>

                <Col xs="12" md="6">
                  <div className="infoTatoueur" >
                  <img src={timmy_rodger} className="photo-tatoueur" />
                  <div className="tatoueur-header">
                    <h1 className="h1Portfolio">
                      {this.props.portfolio.pseudo}
                    </h1>
                    <a href="https://www.instagram.com/cosmic.billie/?hl=fr"><img
                      src={insta}
                      style={{ width: "40px", height: "40px" }}
                    /></a>
                  </div>
                  <p className="textPresentation">
                    {this.props.portfolio.presentation}
                  </p>
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <div style={{ width: "80%", margin: "5% auto" }}>
                    <GalleryPortfolio />
                  </div>
                </Col>
              </Row>

              <Row className='mt-0'>      
                < ButtonOpenFormTatoueurs />
              </Row>

            </Container>
          </aside>
        ) : null}
      </>
    );
  }
}

export default ModalPortfolio;
