import React, { Component } from 'react'

import './GuestHome.css'
import '../style_trame.css'
import ButtonHomeGuest from './ButtonHomeGuest'
import '../index.css'
import '../index.css'


class GuestHome extends Component {
    constructor (props) {
        super (props);
        this.state = {}
        }

    render ()
    {
        return(
            <div>
            <ButtonHomeGuest/>
            </div>
        )
    }
}

export default GuestHome ;
