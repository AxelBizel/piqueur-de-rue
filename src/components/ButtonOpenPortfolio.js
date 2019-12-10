import React, {Component, Fragment} from 'react';
import PortfolioModal from './modalPortfolio';

const StyleDiv = {
    width : "100vw",
    height : "100vh",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    flexDirection : "column"
}

class ButtonOpenPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state= {
            showModal: false,
        };
    }

    openModal=(e)=> {
        let {showModal} = this.state;
        e.preventDefault()
        showModal = true;
        this.setState({ showModal })
    }


    closeModal=(e)=> {
        let {showModal} = this.state;
        showModal = false;
        this.setState({ showModal })
    }

    render(){
        return(
            <div style={StyleDiv}>
            <Fragment >
                <button onClick={this.openModal}>Accéder à son portfolio</button>
                <PortfolioModal showModal={this.state.showModal} closeModal={this.closeModal} />
            </Fragment>
            </div>
        )
    }



}

export default ButtonOpenPortfolio;