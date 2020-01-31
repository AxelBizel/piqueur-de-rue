import React, { Component } from "react";
import ModalPortfolioGuest from "./ModalPortfolioGuest";

class ButtonPortfolioGuest extends Component {
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
    this.setState({ showModal });
  };

  render() {
    return (
      <div>
        <button className="buttonPortfolioGuest" onClick={this.openModal}>
         en savoir plus      
        </button>
        <ModalPortfolioGuest
          portfolio={this.props.portfolio}
          showModal={this.state.showModal}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default ButtonPortfolioGuest;
