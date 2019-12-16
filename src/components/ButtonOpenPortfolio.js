import React, {Component} from 'react';
import PortfolioModal from './ModalPortfolio';

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
        setTimeout(()=>this.setState({ showModal }), 500)
    }

    render(){
        
        return(
            <div className="SectionContainer">
                <button className="buttonPortfolio" onClick={this.openModal}>Accéder au portfolio</button>
                <PortfolioModal showModal={this.state.showModal} closeModal={this.closeModal} />
            </div>
        )
    }
}

export default ButtonOpenPortfolio;