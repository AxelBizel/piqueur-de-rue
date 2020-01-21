import React, { Component } from "react";
import "./modalFormTatoueurs.css";
import FormulairePortfolio from "./FormulairePortfolio";
import { Container, Row, Col } from "reactstrap";


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
          <aside className="MainModalContactResidents" role="dialog">
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
