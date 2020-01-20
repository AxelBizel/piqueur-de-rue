import React, { Component } from "react";
import ModalFormTatoueurs from "./ModalFormTatoueurs";

class ButtonOpenFormTatoueurs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalFormTatoueurs: false
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", e => {
      if (e.key === "Escape" || e.key === "Esc") {
        return this.closeModalFormTatoueurs();
      }
    });
  }

  openModalFormTatoueurs = e => {
    let { showModalFormTatoueurs } = this.state;
    e.preventDefault();
    showModalFormTatoueurs = true;
    this.setState({ showModalFormTatoueurs });
  };

  closeModalFormTatoueurs = () => {
    let { showModalFormTatoueurs } = this.state;
    showModalFormTatoueurs = false;
    setTimeout(() => this.setState({ showModalFormTatoueurs }), 500);
  };

  render() {
    return (    
      <div>
        <button className="buttonPortfolio" onClick={this.openModalFormTatoueurs}>
        Nous contacter    
        </button>
        <ModalFormTatoueurs
          showModalFormTatoueurs={this.state.showModalFormTatoueurs}
          closeModalFormTatoueurs={this.closeModalFormTatoueurs}
        />
      </div>
    );
  }
}

export default ButtonOpenFormTatoueurs;
