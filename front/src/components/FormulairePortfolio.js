import React, {Component} from 'react';


class FormulairePortfolio extends Component {
    constructor(props){
        super(props);
        this.state = {  valueFirstName : "",
                        valueLastName : "",
                        valueAge : null,
                        valueTel : null,
                        valueEmail : null,
                        valueTattooLocation : "",
                        valueHauteur : "",
                        valueLargeur : "",
                        valueBudget : "",
                        valueStory : "",
                        };
    }



    handleChange = (event) =>{
        const { valueFirstName, valueLastName, valueAge, valueTel, valueEmail } = this.state;
        this.state.valueFirstName = event.target.valueFirstName;
        this.state.valueLastName = event.target.valueLastName;
        this.state.valueAge = event.target.valueAge;
        this.state.valueTel = event.target.valueTel;
        this.state.valueEmail = event.target.valueEmail;
        this.state.valueTattooLocation = event.target.valueTattooLocation;
        this.state.valueHauteur = event.target.valueHauteur;
        this.state.valueLargeur = event.target.valueLargeur;
        this.state.valueBudget = event.target.valueBudget;
        this.state.valueStory = event.target.valueStory;
        this.setState({ valueFirstName,
                        valueLastName,
                        valueAge,
                        valueTel,
                        valueEmail,
                        valueTattooLocation,
                        valueHauteur,
                        valueLargeur,
                        valueBudget,
                        valueStory });
    }

    

    handleSubmit = (event) =>{
        alert('Le form a été soumis : ' + this.state.value);
        event.preventDefault();
    }
    
    

    render(){
        return (
            <>
                <form className="formPortfolio" onSubmit={event => event.preventDefault()} method="POST" action="contacterLeTatoueur">
                    <h1>Formulaire de contact :</h1>
                    
                    <h2>Vous :</h2>
                    <input name="firstname" type="text" onChange={this.handleChange} valueFullname={this.state.valueFullname} placeholder="Votre prénom :"  required></input>
                    <input name="lastname" type="text" onChange={this.handleChange} valueFullname={this.state.valueFullname} placeholder="Votre nom :"  required></input>
                    <input name="age" type="number" onChange={this.handleChange} valueAge={this.state.valueAge} placeholder="Votre âge :"  required></input>
                    <input name="phone" type="tel" onChange={this.handleChange} valueTel={this.state.valueTel} size={10} minlength={1} maxlength={10} pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" placeholder="Votre numéro de téléphone :"  required></input>
                    <input name="email" type="email" onChange={this.handleChange} valueEmail={this.state.valueEmail} placeholder="Votre adresse mail :" required></input>
                    
                    <h2>Votre projet :</h2>
                    <input name="tattoolocation" type="text" onChange={this.handleChange} valueTattooLocation={this.state.valueTattooLocation} placeholder="Emplacement du tatouage souhaitée :"  required></input>
                    <input name="hauteur" type="number" onChange={this.handleChange} valueHauteur={this.state.valueHauteur} placeholder="Dimension de tatouage souhaitée (hauteur en centimètres):"  required></input>
                    <input name="largeur" type="number" onChange={this.handleChange} valueLargeur={this.state.valueLargeur} placeholder="Dimension de tatouage souhaitée (largeur en centimètres):"  required></input>
                    <input name="budget" type="number" onChange={this.handleChange} valueBudget={this.state.valueBudget} placeholder="Votre budget :"  required></input>
                    <textarea id="story" name="story" rows="5" cols="33" valueStory={this.state.valueStory}>
                    Dîtes-nous en plus sur votre projet ici :
                    </textarea>
                    <label id="labelPhone">Pourquoi avons-nous besoin de ces informations ?</label>
                    <button className="buttonSubmit" type="submit">Envoyer mes infos au tatoueur</button>
                </form>
            </>
        );
    }
}



export default FormulairePortfolio;
