import React, { Component } from "react";
import PortfolioModal from "./ModalPortfolio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'

class ButtonOpenPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", e => {
      if (e.key === "Escape" || e.key === "Esc") {
        return this.closeModal();
      }
    });
  }

  openModal = e => {
    let { showModal } = this.state;
    e.preventDefault();
    showModal = true;
    this.setState({ showModal });
  };

  closeModal = () => {
    let { showModal } = this.state;
    showModal = false;
    setTimeout(() => this.setState({ showModal }), 500);
  };

  render() {
    return (
      <div>
        <button className="buttonPortfolio" onClick={this.openModal}>
        {this.props.portfolio.pseudo}       <FontAwesomeIcon icon={faMousePointer} />
        </button>
        <PortfolioModal
          portfolio={this.props.portfolio}
          showModal={this.state.showModal}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default ButtonOpenPortfolio;
