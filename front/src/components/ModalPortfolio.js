import React, { Component } from "react";
import "./modalPortfolio.css";
import timmy_rodger from "../img/tatoueurs/portraits-500px/timmy_rodger.jpg";
import insta from "../img/logo/logoIG.png";
import FormulairePortfolio from "./FormulairePortfolio";
import { Container, Row, Col } from "reactstrap";
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

                <Col xs="12" md="6">
                  <img src={timmy_rodger} className="photo-tatoueur" />
                  <div className="tatoueur-header">
                    <h1 className="h1Portfolio">
                      {this.props.portfolio.pseudo}
                    </h1>
                    <img
                      src={insta}
                      style={{ width: "40px", height: "40px" }}
                    />
                  </div>
                  <p className="textPresentation">
                    {this.props.portfolio.presentation}
                  </p>
                  <a href="https://www.instagram.com/cosmic.billie/?hl=fr"></a>
                </Col>


                <Col xs="12" md="6">
                  <div style={{ width: "80%", margin: "5% auto" }}>
                    <GalleryPortfolio />
                  </div>
                </Col>
              </Row>


              <Row className='mt-0'>
                <button
                  className="buttonPortfolio"
                  onClick={this.openFormulairePortfolio}
                >
                  Contacter tatoueur
                </button>
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
