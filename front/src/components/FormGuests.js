import React, { Component } from 'react';
const axios = require('axios');


class FormGuests extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
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
        this.setState({ [e.target.name]: e.target.value })

    }
    


    handleSubmitFormGuest = (event) => {
        console.log('Le formGuests a été soumis : ', this.state);
        let guest = this.state;
        axios
            .post("http://localhost:5000/api/guests", guest)
        this.setState(this.getInitialState());
    
        event.preventDefault();
    } 


    render() {
        return (
            <>
                <form className="formPortfolio" onSubmit={this.handleSubmitFormGuest} method="POST" action='/api/guests'>
                    <h1>- Devenez GUEST -</h1>
                    <input name="firstnameG" type="text" onChange={this.handleChangeInputGuest} value={this.state.firstnameG} placeholder="Votre prénom :" required></input>
                    <input name="lastnameG" type="text" onChange={this.handleChangeInputGuest} value={this.state.lastnameG} placeholder="Votre nom :" required></input>
                    <input name="pseudoG" type="text" onChange={this.handleChangeInputGuest} value={this.state.pseudoG} placeholder="Votre pseudo :" ></input>
                    <input name="phoneG" type="tel" onChange={this.handleChangeInputGuest} value={this.state.phoneG} size={10} minLength={1} maxLength={10} placeholder="Votre numéro de téléphone :" required></input>
                    <input name="emailG" type="email" onChange={this.handleChangeInputGuest} value={this.state.emailG} placeholder="Votre adresse mail :" required></input>
                    <input name="compteG" type="text" onChange={this.handleChangeInputGuest} value={this.state.compteG} placeholder="Votre compte Instagram / Facebook / autres :"></input>
                    <textarea id="storyG" name="storyG" rows="5" cols="33" onChange={this.handleChangeInputGuest} value={this.state.storyG} placeholder="Dîtes-nous en plus ici : ">
                    </textarea>
                    <button className="buttonSubmit" type="submit" style={{color:"black"}}>Envoyer ma candidature</button>
                </form>
            </>
        );
    }
}

export default FormGuests;
