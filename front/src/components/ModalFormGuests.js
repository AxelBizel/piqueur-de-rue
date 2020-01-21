import React, { Component } from "react";
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
      <div>
        <div className="background" style={{display : showModalFormGuests? "flex" : "none"}} onClick={() => this.props.closeModalFormGuests()}></div>
        {showModalFormGuests ? (
          <aside className="MainModalGuestAndProject" role="dialog">
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
      </div>
    );
  }
}

export default ModalFormGuests;
