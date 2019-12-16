import React, { Component } from 'react';
import FormulaireGuest from './FormulaireGuest';
import './ButtonHomeGuest.css'
import '../index.css'
import header from '../img/divers/header.jpg'
import footer from '../img/divers/footer.jpg'

class ButtonHomeGuest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    openModal = (e) => {
        let { showModal } = this.state;
        e.preventDefault()
        showModal = true;
        this.setState({ showModal })
    }


    closeModal = (e) => {
        let { showModal } = this.state;
        showModal = false;
        this.setState({ showModal })
    }

    render() {
        return (
            <div className="SectionGuestContainer"
                 style= {{"background": "#786B60"}}>
                <img src= {header}></img>
                <h1 className="HeaderSection">DEVENEZ GUEST</h1>
                <p className="text_guest">
                    Vous êtes tatoueur et vous cherchez un salon sur Lyon pour venir faire un guest.
                    Contactez nous et obtenez votre code d'accès pour planifier votre venu, recevoir les infos sur
                    le fonctionnement du shop ainsi que la gestion de votre image.
            </p>
                <button className="button_guest" onClick={this.openModal}>Devenez Guest</button>
                <FormulaireGuest showModal={this.state.showModal} closeModal={this.closeModal} />
                <img src= {footer}></img>
            </div>
        )
    }
}

export default ButtonHomeGuest;