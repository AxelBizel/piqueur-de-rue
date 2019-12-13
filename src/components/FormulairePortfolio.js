import React, {Component} from 'react';

class FormulairePortfolio extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    render(){
        
        return(
            <div className="SectionContainer">
                <h1 className="HeaderSection">NOS TATOUEURS</h1>
                <button style={styleButton} onClick={this.openModal}>Accéder à son portfolio</button>
                <PortfolioModal showModal={this.state.showModal} closeModal={this.closeModal} />
            </div>
        )
    }
}

export default FormulairePortfolio;