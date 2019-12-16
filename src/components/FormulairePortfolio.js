import React, {Component} from 'react';


class FormulairePortfolio extends Component {
    constructor(props){
        super(props);
        this.state = {value : ""};
    }



    handleChange = (event) =>{
    this.setState({value: event.target.value});
    }

    handleSubmit = (event) =>{
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
    }
    
    

    render(){
        return (
            <form className="formPortfolio" onSubmit={event => event.preventDefault()}>
                <h1>Formulaire de contact :</h1>
                <input name="fullName" type="text" onChange={this.handleChange} value={this.state.value} placeholder="Votre nom, prénom"></input>
            </form>
        );
    }
}

export default FormulairePortfolio;