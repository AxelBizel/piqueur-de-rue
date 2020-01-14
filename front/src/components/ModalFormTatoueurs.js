import React, { Component } from "react";
import "./modalFormTatoueurs.css";
import timmy_rodger from "../img/tatoueurs/portraits-500px/timmy_rodger.jpg";
import insta from "../img/logo/logoIG.png";
import FormulairePortfolio from "./FormulairePortfolio";
import { Container, Row, Col } from "reactstrap";
import GalleryPortfolio from "./GalleryPortfolio";

class ModalFormTatoueurs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormulaire: false
    }; 
  }


  render() {
    const { showModalFormTatoueurs } = this.props;
    return (
      <>
        {showModalFormTatoueurs ? (
          <aside className="mainModalFormTatoueurs" role="dialog">
            <div className="close-container" onClick={this.props.closeModalFormTatoueurs}>
              <div className="leftright"></div>
              <div className="rightleft"></div>
              <label className="close"></label>
            </div>
            <Container >
              <FormulairePortfolio />
            </Container>
          </aside>
        ) : null}
      </>
    );
  }
}

export default ModalFormTatoueurs;
