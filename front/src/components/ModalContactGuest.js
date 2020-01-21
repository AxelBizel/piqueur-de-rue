import React, {Component} from 'react';
import './GuestHome.css';

const ContactForm = () => (
    
    <form id="contact-form" method="post" data-format="inline">
        <h3>NOUS CONTACTER</h3>
        <input type="text" id="Pseudo" placeholder="Votre prénom / nom / pseudo" required />
        <input type="text" id="Style" placeholder="Votre style" required />
        <input type="text" id="email" placeholder="Votre e-mail" required />
        <input type="text" id="socialnetwork" placeholder="Votre Instagram / Facebook / Site web" required />
        <textarea rows="8" id="message" placeholder="Message" required></textarea>
        <input className="norobots" type="text" name="_norobots" />
        <button className="btn" type="submit" id="submit" value="Send">Envoyer</button>
    </form>
)


class ModalContactGuest extends Component {
    
    render(){
        const {showModal} = this.props;
        return(
            <div>           
                <div className="background" style={{display : showModal? "flex" : "none"}} onClick={() => this.props.closeModal()}></div>
                {showModal ? 
                    <div className="ContactModal" role="dialog">
                    <button className="closeButton" onClick={ this.props.closeModal}>Fermer</button>
                    <ContactForm />
                    </div> : null
                }
            </div>
        )
    }
}

export default ModalContactGuest;