import React, { Component } from "react";
import "./modalPortfolio.css";
import abeille from "../img/tatoueurs/abeille.jpg";
import cosmic from "../img/tatoueurs/cosmic.jpg";
import insta from "../img/instagram.png";
import CarrouselPortfolio from "./CarrouselPortfolio";
import FormulairePortfolio from "./FormulairePortfolio";

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
            {/* <button className="buttonCloseModal" onClick={ props.closeModal}>X</button> */}
            <h1 className="h1Portfolio">{this.props.portfolio.pseudo}</h1>
            <div className="textEtImg">
              <a href="https://www.instagram.com/cosmic.billie/?hl=fr">
                <img
                  className="imgPresentation"
                  src={cosmic}
                  alt="photo de Cosmic Billie"
                />
              </a>
              <a href="https://www.instagram.com/cosmic.billie/?hl=fr">
                <img src={insta} style={{ width: "100px" }} />
              </a>
              <p className="textPresentation">
                {this.props.portfolio.presentation}
              </p>
            </div>
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
            <div className="sectionImgs">
              <img
                className="imgPrincipale"
                src={abeille}
                alt="réalisation du tatoueur"
              />
              <CarrouselPortfolio />
            </div>
          </aside>
        ) : null}
      </>
    );
  }
}

export default ModalPortfolio;
