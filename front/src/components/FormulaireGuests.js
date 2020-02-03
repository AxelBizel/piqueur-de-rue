import React, { Component } from "react";
import "./Formulaires.css";
import { IPserver } from "../conf/confIP";

const axios = require("axios");

class FormulaireGuests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guest: this.getInitialState(),
      showConfirmation: false
    };
  }

  getInitialState = () => ({
    firstnameG: "",
    lastnameG: "",
    pseudoG: "",
    phoneG: "",
    emailG: "",
    compteG: "",
    storyG: ""
  });

  handleChangeInputGuest = e => {
    const { guest } = this.state;
    guest[e.target.name] = e.target.value;
    this.setState({ guest });
  };

  handleSubmitFormGuest = event => {
    event.preventDefault();
    let { guest } = this.state;
    axios
      .post(`${IPserver}/api/guests`, guest)
      .then(console.log("add guest on table guest ok"));
    this.setState({
      guest: this.getInitialState(),
      showConfirmation: true
    });
  };

  render() {
    return (
      <div>
        {this.state.showConfirmation === false ? (
          <form
            className="FlexFormContainerGuests"
            onSubmit={this.handleSubmitFormGuest}
            method="POST"
            action="/api/guests"
          >
            <h1 className="titleContactForm">Devenez Guest</h1>

            <input
              className="inputForm"
              name="firstnameG"
              type="text"
              onChange={this.handleChangeInputGuest}
              value={this.state.firstnameG}
              placeholder="Votre prénom :"
              required
            ></input>

            <input
              className="inputForm"
              name="lastnameG"
              type="text"
              onChange={this.handleChangeInputGuest}
              value={this.state.lastnameG}
              placeholder="Votre nom :"
              required
            ></input>

            <input
              className="inputForm"
              name="pseudoG"
              type="text"
              onChange={this.handleChangeInputGuest}
              value={this.state.pseudoG}
              placeholder="Votre pseudo :"
            ></input>

            <input
              className="inputForm"
              name="emailG"
              type="email"
              onChange={this.handleChangeInputGuest}
              value={this.state.emailG}
              placeholder="Votre adresse mail :"
              required
            ></input>

            <input
              className="inputForm"
              name="compteG"
              type="text"
              onChange={this.handleChangeInputGuest}
              value={this.state.compteG}
              placeholder="Où voir vos photos ?"
            ></input>

            <textarea
              className="inputForm"
              name="storyG"
              rows="5"
              cols="33"
              onChange={this.handleChangeInputGuest}
              value={this.state.storyG}
              placeholder="Dîtes-nous en plus ici : "
            ></textarea>

            <button className="buttonForm" type="submit">
              Envoyer ma candidature
            </button>
          </form>
        ) : (
          <div className="ModalSendConformationGuest">
            <p>Votre demande a bien été envoyée</p>
            <p>Nous vous répondrons dans les plus brefs délais</p>
            <p>Merci</p>
          </div>
        )}
      </div>
    );
  }
}

export default FormulaireGuests;
