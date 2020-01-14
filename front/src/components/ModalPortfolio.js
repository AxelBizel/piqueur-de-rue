import React, { Component } from "react";
import "./modalPortfolio.css";
import insta from "../img/logo/logoIG.png";
import FormulairePortfolio from "./FormulairePortfolio";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import GalleryPortfolio from "./GalleryPortfolio";

class ModalPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormulaire: false
    };
  }

  openFormulairePortfolio = () => {
    let { showFormulaire } = this.state;
    showFormulaire = true;
    this.setState({ showFormulaire });
  };

  closeFormulairePortfolio = () => {
    let { showFormulaire } = this.state;
    showFormulaire = false;
    setTimeout(() => this.setState({ showFormulaire }), 500);
  };

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
            <div class="close-container" onClick={this.props.closeModal}>
              <div class="leftright"></div>
              <div class="rightleft"></div>
              <label class="close"></label>
            </div>

            <Container>
              <Row>
                <Col xs="12" md="5">
                  <div className="infoTatoueur">
                    <Card style={{width:'80%', margin: '0 auto'}}>
                      <CardImg
                        top
                        width="100%"
                        src={require("../img/tatoueurs/portraits-500px/" +
                          `${this.props.portfolio.id}` +
                          ".jpg")}
                        alt="Portrait du tatoueur"
                      />
                      <CardBody>
                        <CardTitle>
                          <div className="tatoueur-header">
                            <h1 className="h1Portfolio">
                              {this.props.portfolio.pseudo}
                            </h1>
                            <a href="https://www.instagram.com/cosmic.billie/?hl=fr">
                              <img
                                src={insta}
                                style={{ width: "35px", height: "35px" }}
                              />
                            </a>
                          </div>
                        </CardTitle>
                        <CardText>
                          <p className="tatoueur-subtitle">
                            Style : {this.props.portfolio.style}
                          </p>
                          <p className="textPresentation">
                            {this.props.portfolio.presentation}
                          </p>
                        </CardText>
                        <button>Contact</button>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
                <Col xs="12" md="7">
                  <div 
                  style={{ width: "80%", margin: "0 auto" }}
                  >
                    <GalleryPortfolio />
                  </div>
                </Col>
              </Row>

              <Row className="mt-0">
                {this.state.showFormulaire ? (
                  <FormulairePortfolio
                    openFormulaire={this.openFormulairePortfolio}
                    closeFormulaire={this.closeFormulairePortfolio}
                  />
                ) : null}
              </Row>
            </Container>
          </aside>
        ) : null}
      </>
    );
  }
}

export default ModalPortfolio;
