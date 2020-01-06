import React, {Component} from 'react';
import './yourproject.css';

const ContactForm = () => (
    
    <form id="contact-form" method="post" data-format="inline">
        <p>NOUS CONTACTER</p>
        <input type="text" id="name" placeholder="Your name" required />
        <input type="text" id="email" placeholder="your@email.com" required />
        {/* <select id="subject" required>
            <option value="" disabled selected>Select an option</option>
            <option value="compliment">I want to compliment you, you interesting person</option>
            <option value="insult">I want to insult you, jerk!</option>
            <option value="Media">I would like to paint you</option>
            <option value="Writing">Where am I</option>
            <option value="Other">Operator</option>
        </select> */}
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
                    <button className="closeButton" onClick={ this.props.closeModal}>Close</button>
                    <ContactForm />
                    </div> : null
                }
            </div>
        )
    }
}

export default ModalContactProject;