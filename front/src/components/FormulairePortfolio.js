import React, { Component } from 'react';
const axios = require('axios');


class FormulairePortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        firstname: "",
        lastname: "",
        age: "",
        phone: "",
        email: "",
        tattoolocation: "",
        hauteur: "",
        largeur: "",
        budget: "",
        story: "",
    })


    handleChange = (e) => {
        console.log(this.state)
        this.setState({ [e.target.name]: e.target.value })

    }
    handleChangeInteger = (e) => {
        console.log(this.state)
        this.setState({ [e.target.name]: parseInt(e.target.value) })

    }


    handleSubmit = (event) => {
        console.log('Le form a été soumis : ', this.state);
        let customer = this.state;
        axios
            .post("http://localhost:5000/api/customers", customer)
            .then(console.log("add customer on table customers ok"))
        this.setState(this.getInitialState);
    
        event.preventDefault();
    }


    render() {
        return (
            <>
                <form className="formPortfolio" onSubmit={this.handleSubmit} method="POST" action='/api/customers'>
                    <h1>Formulaire de contact :</h1>

                    <h2>Vous :</h2>
                    <input name="firstname" type="text" onChange={this.handleChange} value={this.state.firstname} placeholder="Votre prénom :" required></input>
                    <input name="lastname" type="text" onChange={this.handleChange} value={this.state.lastname} placeholder="Votre nom :" required></input>
                    <input name="age" type="number" onChange={this.handleChangeInteger} value={this.state.age} placeholder="Votre âge :" required></input>
                    <input name="phone" type="tel" onChange={this.handleChange} value={this.state.phone} size={10} minLength={1} maxLength={10} placeholder="Votre numéro de téléphone :" required></input>
                    <input name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Votre adresse mail :" required></input>

                    <h2>Votre projet :</h2>
                    <input name="tattoolocation" type="text" onChange={this.handleChange} value={this.state.tattoolocation} placeholder="Emplacement du tatouage souhaitée :" ></input>
                    <input name="hauteur" type="number" onChange={this.handleChangeInteger} value={this.state.hauteur} placeholder="Dimension de tatouage souhaitée (hauteur en centimètres):" ></input>
                    <input name="largeur" type="number" onChange={this.handleChangeInteger} value={this.state.largeur} placeholder="Dimension de tatouage souhaitée (largeur en centimètres):" ></input>
                    <input name="budget" type="number" onChange={this.handleChangeInteger} value={this.state.budget} placeholder="Votre budget :" ></input>
                    <textarea id="story" name="story" rows="5" cols="33" onChange={this.handleChange} value={this.state.story} placeholder="Dîtes-nous en plus ici : ">
                    </textarea>
                    <label id="labelPhone">Pourquoi avons-nous besoin de ces informations ?</label>
                    <button className="buttonSubmit" type="submit">Envoyer mes infos au tatoueur</button>
                </form>
            </>
        );
    }
}

export default FormulairePortfolio;
