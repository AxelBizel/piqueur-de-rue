import React, { Component } from "react";
import ModalFormFred from "./ModalFormFred";

class ButtonOpenFormFred extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalFormFred: false
    }; 
  }

  componentDidMount() {
    window.addEventListener("keydown", e => {
      if (e.key === "Escape" || e.key === "Esc") {
        return this.closeModalFormFred();
      }
    });
  }

  openModalFormFred = e => {
    let { showModalFormFred } = this.state;
    e.preventDefault();
    showModalFormFred = true;
    this.setState({ showModalFormFred });
  };

  closeModalFormFred = () => {
    let { showModalFormFred } = this.state;
    showModalFormFred = false;
    setTimeout(() => this.setState({ showModalFormFred }), 500);
  };

  render() {
    return (
      <div>
        <button className="buttonPortfolio" onClick={this.openModalFormFred}>
        Nous contacter    
        </button>
        <ModalFormFred
          showModalFormFred={this.state.showModalFormFred}
          closeModalFormFred={this.closeModalFormFred}
        />
      </div>
    );
  }
}

export default ButtonOpenFormFred;
