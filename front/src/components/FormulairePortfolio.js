import React, {Component} from 'react';


class FormulairePortfolio extends Component {
    constructor(props){
        super(props);
        this.state = {  firstname : "",
                        lastname : "",
                        age : null,
                        phone : null,
                        email : "",
                        tattoolocation : "",
                        hauteur : null,
                        largeur : null,
                        budget : null,
                        story : "",
                        };
    }


    handleChange = (e) =>{
        console.log(this.state)
        this.setState({ [e.target.name]:e.target.value })
    }

    

    handleSubmit = (event) =>{
        console.log('Le form a été soumis : ', this.state.valueEmail);
        event.preventDefault();
    }
    
    

    render(){
        return (
            <>
                <form className="formPortfolio" onSubmit={this.handleSubmit} method="POST" action="contacterLeTatoueur">
                    <h1>Formulaire de contact :</h1>
                    
                    <h2>Vous :</h2>
                    <input name="firstname" type="text" onChange={this.handleChange} value={this.state.firstname} placeholder="Votre prénom :"  required></input>
                    <input name="lastname" type="text" onChange={this.handleChange} value={this.state.lastname} placeholder="Votre nom :"  required></input>
                    <input name="age" type="number" onChange={this.handleChange} value={this.state.age} placeholder="Votre âge :" ></input>
                    {/* <input name="phone" type="tel" onChange={this.handleChange} value={this.state.phone} size={10} minlength={1} maxlength={10} pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" placeholder="Votre numéro de téléphone :"  required></input> */}
                    <input name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Votre adresse mail :" required></input>
                    
                    <h2>Votre projet :</h2>
                    <input name="tattoolocation" type="text" onChange={this.handleChange} value={this.state.tattoolocation} placeholder="Emplacement du tatouage souhaitée :" ></input>
                    <input name="hauteur" type="number" onChange={this.handleChange} value={this.state.hauteur} placeholder="Dimension de tatouage souhaitée (hauteur en centimètres):" ></input>
                    <input name="largeur" type="number" onChange={this.handleChange} value={this.state.largeur} placeholder="Dimension de tatouage souhaitée (largeur en centimètres):" ></input>
                    <input name="budget" type="number" onChange={this.handleChange} value={this.state.budget} placeholder="Votre budget :" ></input>
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
