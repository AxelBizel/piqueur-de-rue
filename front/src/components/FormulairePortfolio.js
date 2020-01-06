import React, {Component} from 'react';


class FormulairePortfolio extends Component {
    constructor(props){
        super(props);
        this.state = {  valueFullname : "",
                        valueAge : null,
                        valueTel : null,
                        valueEmail : null,
                        valueTattooLocation : "",
                        };
    }



    handleChange = (event) =>{
        const { valueFullname, valueAge, valueTel, valueEmail } = this.state;
        this.state.valueFullname = event.target.valueFullname;
        this.state.valueAge = event.target.valueAge;
        this.state.valueTel = event.target.valueTel;
        this.state.valueAge = event.target.valueAge;
        this.state.valueTattooLocation = event.target.valueTattooLocation;
        this.setState({ valueFullname,
                        valueAge,
                        valueTel,
                        valueEmail });
    }

    

    handleSubmit = (event) =>{
        alert('Le form a été soumis : ' + this.state.value);
        event.preventDefault();
    }
    
    

    render(){
        return (
            <form className="formPortfolio" onSubmit={event => event.preventDefault()}>
                <h1>Formulaire de contact :</h1>
                <h2>Vous :</h2>


                <input name="fullName" type="text" onChange={this.handleChange} valueFullname={this.state.valueFullname} placeholder="Votre nom, prénom :"  required></input>

                <input name="age" type="number" onChange={this.handleChange} valueAge={this.state.valueAge} placeholder="Votre âge :"  required></input>

                <input name="phone" type="tel" onChange={this.handleChange} valueTel={this.state.valueTel} size={10} minlength={1} maxlength={10} pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" placeholder="Votre numéro de téléphone :"  required></input>
                  
                <input name="email" type="email" onChange={this.handleChange} valueEmail={this.state.valueEmail} placeholder="Votre adresse mail :" required></input>
                
                <h2>Votre projet :</h2>

                <input name="tattoolocation" type="text" onChange={this.handleChange} valueTattooLocation={this.state.valueTatooLocation} placeholder="Emplacement du tatouage souhaitée :"  required></input>

                <input name="dimension" type="number" onChange={this.handleChange} valueDimension={this.state.valueDimension} placeholder="La dimension du tatouage souhaité en centimètres :"  required></input>

                <input name="budget" type="number" onChange={this.handleChange} valueBudget={this.state.valueBudget} placeholder="Votre budget :"  required></input>

                <textarea id="story" name="story" rows="5" cols="33">
                Dîtes-nous en plus sur votre projet ici :
                </textarea>

                <label id="labelPhone">Pourquoi avons-nous besoin de ces informations ?</label>

            </form>
        );
    }
}



export default FormulairePortfolio;
