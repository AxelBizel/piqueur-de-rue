import React, { Component } from "react";
import "./Formulaires.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink } from "reactstrap";
const IPserver = require("../conf/confIP");

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
    console.log("Le formGuests a été soumis : ", this.state);
    let { guest } = this.state;
    axios.post("${IPserver}/api/guests", guest);
    this.setState({
      guest: this.getInitialState(),
      showConfirmation: true
    });
    event.preventDefault();
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
              name="phoneG"
              type="tel"
              onChange={this.handleChangeInputGuest}
              value={this.state.phoneG}
              size={10}
              minLength={1}
              maxLength={10}
              placeholder="Votre numéro de téléphone :"
              required
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
          <div>
            <p>Votre demande a bien été envoyée</p>
            <p>Nous vous répondrons dans les plus brefs délais</p>
            <p>Thank you</p>
            <NavItem>
              <NavLink href="/" className="styleLink">
                <FontAwesomeIcon icon={faHome} />
              </NavLink>
            </NavItem>
          </div>
        )}
      </div>
    );
  }
}

export default FormulaireGuests;
