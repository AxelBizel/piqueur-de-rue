import React, {Component, Fragment} from 'react';
import PortfolioModal from './modalPortfolio';


class ButtonOpenPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state= {
            showModal: false,
        };
    }


    componentDidMount(){
        const focus = window.addEventListener('keydown',(e)=>{
            if(e.key === "Escape" || e.key === "Esc"){
                return this.closeModal();
            }
        });
    }

    openModal=(e)=> {
        let {showModal} = this.state;
        e.preventDefault()
        showModal = true;
        this.setState({ showModal })
    }


    closeModal=()=> {
        let {showModal} = this.state;
        showModal = false;
        this.setState({ showModal })
    }


    render(){

        return(
            <Fragment>
                <button onClick={this.openModal}>Accéder à son portfolio</button>
                <PortfolioModal showModal={this.state.showModal} closeModal={this.closeModal} />
            </Fragment>
        )
    }



}

export default ButtonOpenPortfolio;