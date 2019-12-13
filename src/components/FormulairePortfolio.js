import React, {Component} from 'react';


class FormulairePortfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : "Cosmic Billie"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
      }

    handleChange(event){
        this.setState({ title : event.target.value });
    }

    render(){
        return (
            <form className="formPortfolio" onSubmit={event => event.preventDefault()}>
                <input name="fullName" type="text" onChange={this.handleChange} value={this.state.title}></input>
                <h1>{this.state.title}</h1>
            </form>
        );
    }
}

export default FormulairePortfolio;