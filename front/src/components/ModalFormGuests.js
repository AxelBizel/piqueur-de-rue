import React, { Component } from "react";
// import "./modalFormGuests.css";
import FormGuests from "./FormGuests";
import { Container } from "reactstrap";


class ModalFormGuests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormGuests: false
    }; 
  }


  render() {
    const { showModalFormGuests } = this.props;
    return (
      <>
        {showModalFormGuests ? (
          <aside className="mainModalFormTatoueurs" role="dialog">
            <div className="close-container" onClick={this.props.closeModalFormGuests}>
              <div className="leftright"></div>
              <div className="rightleft"></div>
              <label className="close"></label>
            </div>
            <Container >
              <FormGuests />
            </Container>
          </aside> 
        ) : null}
      </>
    );
  }
}

export default ModalFormGuests;
