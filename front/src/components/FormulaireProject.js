import React, { Component } from 'react';
import './Formulaires.css';
import { Container, Row } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink } from 'reactstrap';

const axios = require('axios');

class FormulaireProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: this.getInitialState(),
            showConfirmation: false,
        }
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
        const {customer} = this.state;
        customer[e.target.name]=e.target.value
        this.setState({ customer })
    }
 
    handleChangeInteger = (e) => {
        const {customer} = this.state;
        customer[e.target.name]=parseInt(e.target.value);
        this.setState({ customer })
    }

    handleSubmit = (event) => {
        let { customer } = this.state;
        axios
            .post("http://localhost:5000/api/customers", customer)
            .then(console.log("add customer on table customers ok"))
        this.setState({
            customer: this.getInitialState(),
            showConfirmation: true
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                {this.state.showConfirmation === false ? (
                <form className="FlexFormContainerProject" onSubmit={this.handleSubmit} method="POST" action='/api/customers'>
                    <h1>Formulaire de contact</h1>
                    <div>
                    <Container>
                        <Row >
                            <div className="FlexProject1">

                                <input className="inputForm" name="firstname" type="text" onChange={this.handleChange} value={this.state.firstname} placeholder="Votre prénom :" required></input>

                                <input className="inputForm" name="lastname" type="text" onChange={this.handleChange} value={this.state.lastname} placeholder="Votre nom :" required></input>
                                
                                <input className="inputForm" name="age" type="text" onChange={this.handleChangeInteger} value={this.state.age} placeholder="Votre âge :" required></input>
                                
                                <input className="inputForm" name="phone" type="tel" onChange={this.handleChange} value={this.state.phone} size={10} minLength={1} maxLength={10} placeholder="Votre numéro de téléphone :" required></input>
                                
                                <input className="inputForm" name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Votre adresse mail :" required></input>
                            </div>
                            
                            <div className="FlexProject2">
                                
                                <input className="inputForm" name="tattoolocation" type="text" onChange={this.handleChange} value={this.state.tattoolocation} placeholder="Emplacement du tatouage souhaité :" ></input>
                                
                                <input className="inputForm" name="hauteur" type="text" onChange={this.handleChangeInteger} value={this.state.hauteur} placeholder="Hauteur du tatouage souhaitée (en cm)" ></input>
                                
                                <input className="inputForm" name="largeur" type="text" onChange={this.handleChangeInteger} value={this.state.largeur} placeholder="Largeur du tatouage souhaitée (en cm)" ></input>
                                
                                <input className="inputForm" name="budget" type="text" onChange={this.handleChangeInteger} value={this.state.budget} placeholder="Votre budget :" ></input>
                            </div>  
                            
                        </Row>
                        <textarea className="inputForm" name="story" onChange={this.handleChange} value={this.state.story} placeholder="Envie de nous en dire plus :">
                        </textarea>
                    </Container>
                    </div>
                    <button className="buttonForm" type="submit">Envoyer ma demande</button>
                </form>
                ) : (
                    <div>
                    <p>Votre demande a bien été envoyée</p>
                    <p>Nous vous répondrons dans les plus brefs délais</p>
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

export default FormulaireProject;
