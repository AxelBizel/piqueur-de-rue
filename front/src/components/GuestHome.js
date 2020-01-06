import React, { Component } from 'react'
import ModalContactGuest from './modalContactGuest'
import './GuestHome.css'


class GuestHome extends Component {
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

    closeModal=()=> {
        let {showModal} = this.state;
        showModal = false;
        this.setState({ showModal })
    }

    render () {
        return(
            <div>
                <h1 className="HeaderSection">DEVENEZ GUEST</h1>
                <div className="SectionGuestContainer">
                    <p className="GuestText">
                        Vous êtes tatoueur et vous cherchez un salon sur Lyon pour venir faire un guest.
                        Contactez nous et obtenez votre code d'accès pour planifier votre venu, recevoir les infos sur
                        le fonctionnement du shop ainsi que la gestion de votre image.
                    </p>
                    <button className="buttonContactProject" onClick={this.openModal}>DEVENEZ GUEST</button>
                    <ModalContactGuest showModal={this.state.showModal} closeModal={this.closeModal} />
                </div>
            </div>
        )
    }
}

export default GuestHome ;
