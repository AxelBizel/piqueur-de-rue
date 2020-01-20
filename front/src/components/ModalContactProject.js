import React, {Component} from 'react';
import './yourproject.css';

const ContactForm = () => (
    
    <form id="contact-form" method="post" data-format="inline">
        <h3>NOUS CONTACTER</h3>
        <input type="text" id="name" placeholder="Your name" required />
        <input type="text" id="email" placeholder="your@email.com" required />
        <textarea rows="8" id="message" placeholder="Message" required></textarea>
        <input className="norobots" type="text" name="_norobots" />
        <button className="btn" type="submit" id="submit" value="Send">Send</button>
    </form>
)


class ModalContactProject extends Component {
    
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

export default ModalContactProject;