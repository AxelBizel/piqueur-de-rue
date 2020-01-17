import React, { Component } from "react";
import "./modalFormTatoueurs.css";
import FormulaireFred from "./FormulaireFred";
import { Container, Row, Col } from "reactstrap";


class ModalFormFred extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormulaireFred: false
    }; 
  } 


  render() {
    const { showModalFormFred } = this.props;
    return (
      <>
        {showModalFormFred ? (
          <aside className="mainModalFormTatoueurs2" role="dialog">
            <div className="close-container" onClick={this.props.closeModalFormFred}>
              <div className="leftright"></div>
              <div className="rightleft"></div>
              <label className="close"></label>
            </div>
            <Container >
              <FormulaireFred />
            </Container>
          </aside> 
        ) : null}
      </>
    );
  }
}

export default ModalFormFred;
