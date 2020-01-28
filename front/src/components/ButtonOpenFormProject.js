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
        return this.closeModalProject();
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
    this.setState({ showModalFormProject });
  };

  render() {
    return (
      <div>
        <button className="buttonPortfolio" onClick={this.openModalFormProject}>
        Nous contacter    
        </button>
        <ModalFormProject
          showModalFormProject={this.state.showModalFormProject}
          closeModalProject={this.closeModalProject}
        />
      </div>
    );
  }
}

export default ButtonOpenFormProject;
