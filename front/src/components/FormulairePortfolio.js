import React, { Component } from 'react';
import './formulaireContact.css';
const axios = require('axios');


class FormulairePortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        firstname: "",
        lastname: "",
        age: null,
        phone: "",
        email: "",
        tattoolocation: "",
        hauteur: null,
        largeur: null,
        budget: null,
        story: "", 
    })      


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    handleChangeInteger = (e) => {
        this.setState({ [e.target.name]: parseInt(e.target.value) })
    }


    handleSubmit = (event) => {
        console.log('Le form a été soumis : ', this.state);
        let customer = this.state;
        axios
            .post("http://localhost:5000/api/customers", customer)
            .then(console.log("add customer on table customers ok"))
        this.setState(this.getInitialState());
    
        event.preventDefault();
    } 


    render() {
        return (
            <>
                <form className="formCha" onSubmit={this.handleSubmit} method="POST" action='/api/customers'>
                    <h1 className="h1formGuest">- Formulaire de contact -</h1>
                    <div className="forFlexGuest1">
                        <div className="forFlexCha2">
                            <h2 className=".h2formGuest {
">Vous :</h2>
                            <input className="inputCha" name="firstname" type="text" onChange={this.handleChange} value={this.state.firstname} placeholder="Votre prénom :" required></input>
                            <input className="inputCha" name="lastname" type="text" onChange={this.handleChange} value={this.state.lastname} placeholder="Votre nom :" required></input>
                            <input className="inputCha" name="age" type="number" onChange={this.handleChangeInteger} value={this.state.age} placeholder="Votre âge :" required></input>
                            <input className="inputCha" name="phone" type="tel" onChange={this.handleChange} value={this.state.phone} size={10} minLength={1} maxLength={10} placeholder="Votre numéro de téléphone :" required></input>
                            <input className="inputCha" name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Votre adresse mail :" required></input>
                        </div>
                        <div className="forFlexCha3">
                            <h2 className=".h2formGuest {
">Votre projet :</h2>
                            <input className="inputCha" name="tattoolocation" type="text" onChange={this.handleChange} value={this.state.tattoolocation} placeholder="Emplacement du tatouage souhaitée :" ></input>
                            <input className="inputCha" name="hauteur" type="number" onChange={this.handleChangeInteger} value={this.state.hauteur} placeholder="Dimension de tatouage souhaitée (hauteur en centimètres):" ></input>
                            <input className="inputCha" name="largeur" type="number" onChange={this.handleChangeInteger} value={this.state.largeur} placeholder="Dimension de tatouage souhaitée (largeur en centimètres):" ></input>
                            <input className="inputCha" name="budget" type="number" onChange={this.handleChangeInteger} value={this.state.budget} placeholder="Votre budget :" ></input>
                            <textarea id="storyGuest" name="story" rows="8" cols="33" onChange={this.handleChange} value={this.state.story} placeholder="Dîtes-nous en plus ici : ">
                            </textarea>
                        </div>
                    </div>
                    <button className="buttonForm" type="submit" style={{color:"black"}}>Envoyer mes infos au tatoueur</button>
                </form>
            </>
        );
    }
}

export default FormulairePortfolio;
