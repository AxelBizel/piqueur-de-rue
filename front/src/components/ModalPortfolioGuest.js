import React, { Component } from "react";
import insta from "../img/logo/logoIG.png";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import GalleryPortfolio from "./GalleryPortfolio";

import {IPserver} from '../conf/confIP'



class ModalPortfolioGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { showModal, portfolio } = this.props;
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
                <Col xs="12" lg="5">
                  <div className="infoTatoueur">
                    <Card style={{ width: "100%", margin: "0 auto", border:'0' }}>
                      <CardImg
                      style={{width:'66%', margin:'0 auto'}}
                        top
                        src={`${IPserver}/img/${portfolio.id}/portrait.jpg`}
                        alt="Portrait du tatoueur"
                      />
                      <CardBody>
                        <CardTitle>
                          <div className="tatoueur-header">
                            <h1 className="h1Portfolio">
                              {portfolio.pseudo}
                            </h1>
                            <a href= {portfolio.insta} target='_blank' rel="noopener noreferrer">
                              <img
                                src={insta}
                                alt='instagram logo'
                                style={{ width: "36px", height: "36px" }}
                              />
                            </a>
                          </div>
                        </CardTitle>
                        <CardText>
                          <div className="textPresentation">
                            {portfolio.presentation}
                          </div>
                          <div className="GuestSubtitle">Disponibilités : <br/> du {portfolio.startdate} au {portfolio.enddate}.</div>
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
                <Col xs="12" lg="7">
                  <div style={{ width: "85%", margin: "0 auto" }}>
                  <GalleryPortfolio portfolio={portfolio} />
                  </div>
                </Col>
              </Row>
            </Container>
          </aside>
        ) : null}
      </>
    );
  }
}

export default ModalPortfolioGuest;
