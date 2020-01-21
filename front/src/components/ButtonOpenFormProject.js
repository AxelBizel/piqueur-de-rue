import React, { Component } from "react";
import ModalFormProject from "./ModalFormProject";

class ButtonOpenFormProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalFormProject: false
    }; 
  }

  componentDidMount() {
    window.addEventListener("keydown", e => {
      if (e.key === "Escape" || e.key === "Esc") {
        return this.closeModalFormProject();
      }
    });
  }

  openModalFormProject = e => {
    let { showModalFormProject } = this.state;
    e.preventDefault();
    showModalFormProject = true;
    this.setState({ showModalFormProject });
  };

  closeModalProject = () => {
    let { showModalFormProject } = this.state;
    showModalFormProject = false;
    setTimeout(() => this.setState({ showModalFormProject }), 500);
  };

  render() {
    return (
      <div>
        <button className="buttonPortfolio" onClick={this.openModalFormProject}>
        Nous contacter    
        </button>
        <ModalFormProject
          showModalFormProject={this.state.showModalFormProject}
          closeModalFormProject={this.closeModalFormProject}
        />
      </div>
    );
  }
}

export default ButtonOpenFormProject;
