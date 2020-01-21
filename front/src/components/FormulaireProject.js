import React, { Component } from 'react';
import './formulaireContact.css';
import {
    Collapse,
    CardHeader,
    CardBody,
    Card,
    Container,
    Row,
    Col
  } from "reactstrap";
const axios = require('axios');


class FormulaireProject extends Component {
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
            <div>
                <form className="MainFlexContainerProject" onSubmit={this.handleSubmit} method="POST" action='/api/customers'>
                    <h1>- Formulaire de contact -</h1>
                    <div className="FlexContainerProject">
                    <Container>
                    <Row >
                        <div className="FlexProject1">

                            <h2>Vous :</h2>

                            <input className="inputForm" name="firstname" type="text" onChange={this.handleChange} value={this.state.firstname} placeholder="Votre prénom :" required></input>

                            <input className="inputForm" name="firstname" type="text" onChange={this.handleChange} value={this.state.firstname} placeholder="Votre nom :" required></input>
                            
                            <input className="inputForm" name="age" type="number" onChange={this.handleChangeInteger} value={this.state.age} placeholder="Votre âge :" required></input>
                            
                            <input className="inputForm" name="phone" type="tel" onChange={this.handleChange} value={this.state.phone} size={10} minLength={1} maxLength={10} placeholder="Votre numéro de téléphone :" required></input>
                            
                            <input className="inputForm" name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Votre adresse mail :" required></input>
                        </div>
                        
                        <div className="FlexProject2">
                            <h2>Votre projet :</h2>
                            
                            <input className="inputForm" name="tattoolocation" type="text" onChange={this.handleChange} value={this.state.tattoolocation} placeholder="Emplacement du tatouage souhaitée :" ></input>
                            
                            <input className="inputForm" name="hauteur" type="number" onChange={this.handleChangeInteger} value={this.state.hauteur} placeholder="Hauteur du tatouage souhaitée :" ></input>
                            
                            <input className="inputForm" name="largeur" type="number" onChange={this.handleChangeInteger} value={this.state.largeur} placeholder="Largeur du tatouage souhaitée :" ></input>
                            
                            <input className="inputForm" name="budget" type="number" onChange={this.handleChangeInteger} value={this.state.budget} placeholder="Votre budget :" ></input>

                            <button class="btn"><i class="fa fa-download"></i> Download</button>
                        </div>
                    </Row>
                    <textarea id="storyGuest" name="story" rows="8" cols="33" onChange={this.handleChange} value={this.state.story} placeholder="Dîtes-nous en plus ici : ">
                    </textarea>
                    </Container>
                    
                    </div>
                    
                    <button className="buttonForm" type="submit">Envoyer mes infos au tatoueur</button>
                </form>
            </div>
        );
    }
}

export default FormulaireProject;
