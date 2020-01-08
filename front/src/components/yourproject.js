import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';
import './yourproject.css';
import ModalContactProject from '../components/modalContactProject'

/*MODAL CONTACT PROJET*/

export default class YourProject extends Component{
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

    render() {
    return (
        <div>
            <h1 className="HeaderSection">VOTRE PROJET EN ÉTAPE</h1>
                <div className="yourproject">
                    <div className="ProjectSection1">
                        <div className="step"><h3 className="Title">LE RENDEZ-VOUS</h3><p className="TextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p></div>
                    </div>
                
                    <div className="ProjectSection2">
                        <img className="bg-image2"/>
                        <div className="step"><h3 className="Title">DESSIN</h3><p className="TextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p></div>
                    </div>
                
                    <div className="ProjectSection3">
                        <img className="bg-image3"/>
                        <div className="step"><h3 className="Title">SIMULATION</h3><p className="TextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p></div>
                    </div>
                
                    <div className="ProjectSection4">
                        <img className="bg-image4"/>
                        <div className="step"><h3 className="Title">RÉALISATION</h3><p className="TextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p><button className="buttonContactProject" onClick={this.openModal}>NOUS CONTACTER 
                        </button>
                            <ModalContactProject showModal={this.state.showModal} closeModal={this.closeModal}
                        />
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}
}