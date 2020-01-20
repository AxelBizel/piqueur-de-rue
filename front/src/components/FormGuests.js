import React, { Component } from 'react';
import './formulaireChacha.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink } from 'reactstrap';

const axios = require('axios');


class FormGuests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guest: this.getInitialState(),
            showConfirmation: false,
        }
    }

    getInitialState = () => ({
        firstnameG: "",
        lastnameG: "",
        pseudoG: "",
        phoneG: "",
        emailG: "",
        compteG: "",
        storyG: "", 
    })


    handleChangeInputGuest = (e) => {
        const {guest} = this.state;
        guest[e.target.name]=e.target.value
        this.setState({ guest })
    }

    handleSubmitFormGuest = (event) => {
        console.log('Le formGuests a été soumis : ', this.state);
        let { guest } = this.state;
        axios
            .post("http://localhost:5000/api/guests", guest)
        this.setState({
            guest: this.getInitialState(),
            showConfirmation: true
        })
        event.preventDefault();
    } 

    render() {
        return (
            <div>
                {this.state.showConfirmation === false ? (
                <form className="formPortfolio" onSubmit={this.handleSubmitFormGuest} method="POST" action='/api/guests'>
                    <h1 className="h1formCha">- Devenez GUEST -</h1>
                    <input className="inputCha" name="firstnameG" type="text" onChange={this.handleChangeInputGuest} value={this.state.firstnameG} placeholder="Votre prénom :" required></input>
                    <input className="inputCha" name="lastnameG" type="text" onChange={this.handleChangeInputGuest} value={this.state.lastnameG} placeholder="Votre nom :" required></input>
                    <input className="inputCha" name="pseudoG" type="text" onChange={this.handleChangeInputGuest} value={this.state.pseudoG} placeholder="Votre pseudo :" ></input>
                    <input className="inputCha" name="phoneG" type="tel" onChange={this.handleChangeInputGuest} value={this.state.phoneG} size={10} minLength={1} maxLength={10} placeholder="Votre numéro de téléphone :" required></input>
                    <input className="inputCha" name="emailG" type="email" onChange={this.handleChangeInputGuest} value={this.state.emailG} placeholder="Votre adresse mail :" required></input>
                    <input className="inputCha" name="compteG" type="text" onChange={this.handleChangeInputGuest} value={this.state.compteG} placeholder="Votre compte Instagram / Facebook / autres :"></input>
                    <textarea id="storyCha" name="storyG" rows="5" cols="33" onChange={this.handleChangeInputGuest} value={this.state.storyG} placeholder="Dîtes-nous en plus ici : ">
                    </textarea>
                    <button className="buttonForm" type="submit" style={{color:"black"}}>Envoyer ma candidature</button>
                </form>
                ) : (
                <div>
                    <p>Votre demande a bien été envoyée</p>
                    <p>Nous vous répondrons dans les plus brefs délais</p>
                    <FontAwesomeIcon icon={faCoffee} />
                    <p>Thank you</p>
                    <NavItem>
                        <NavLink href="/" className="styleLink"><FontAwesomeIcon icon={faHome} /></NavLink>
                    </NavItem>
                </div>
                )}
            </div>
        );
    }
}

export default FormGuests;
