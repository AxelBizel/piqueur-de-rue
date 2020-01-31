import React, { Component } from "react";
import "./modalFormTatoueurs.css";
import FormulaireProject from "./FormulaireProject";
import { Container} from "reactstrap";


class ModalFormProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormulaireProject: false
    }; 
  } 

  render() {
    const { showModalFormProject } = this.props;
    return (
      <div>
        <div className="background" style={{display : showModalFormProject? "flex" : "none"}} onClick={() => this.props.closeModalProject()}></div>
        {showModalFormProject ? (
          <div className="MainModalGuestAndProject" role="dialog">
            <div className="close-container" onClick={this.props.closeModalProject}>
              <div className="leftright"></div>
              <div className="rightleft"></div>
              <label className="close"></label>
            </div>
            <Container >
              <FormulaireProject />
            </Container>
          </div> 
        ) : null}
      </div>
    );
  }
}

export default ModalFormProject;
