import React, { Component } from 'react'

import './FormulaireGuest.css'
import './style_trame.css'



class FormulaireGuest extends Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render ()
    {
        return(
            <div className = "container_formulaire_guest">
            <h1 className= "title_guest"> Devenez Guest </h1>
            <p>
            Vous êtes tatoueur et vous cherchez un salon sur Lyon pour venir faire un guest.
            Contactez nous et obtenez votre code d'accès pour planifier votre venu, recevoir les infos sur 
            le fonctionnement du shop ainsi que la gestion de votre image.
            </p>
            <button className= "button_guest"> + Devenez Guest </button>
            </div>
        )
    }
}

export default FormulaireGuest ;
