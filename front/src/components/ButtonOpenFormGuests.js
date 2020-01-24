import React, { Component } from "react";
import ModalFormGuests from "./ModalFormGuests";

class ButtonOpenFormGuests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalFormGuests: false
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", e => {
      if (e.key === "Escape" || e.key === "Esc") {
        return this.closeModalFormGuests();
      }
    });
  }

  openModalFormGuests = e => {
    let { showModalFormGuests } = this.state;
    e.preventDefault();
    showModalFormGuests = true;
    this.setState({ showModalFormGuests });
  };

  closeModalFormGuests = () => {
    let { showModalFormGuests } = this.state;
    showModalFormGuests = false;
    this.setState({ showModalFormGuests });
  };

  render() {
    return (
      <div>
        <button className="buttonPortfolio" onClick={this.openModalFormGuests}>
        Nous contacter    
        </button>
        <ModalFormGuests
          showModalFormGuests={this.state.showModalFormGuests}
          closeModalFormGuests={this.closeModalFormGuests}
        />
      </div>
    );
  }
}

export default ButtonOpenFormGuests;