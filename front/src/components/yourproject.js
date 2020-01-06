import React, {Component} from 'react';
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
            <h1 className="HeaderSection">VOTRE PROJET</h1>
                <div className="SectionProjet">
                    <div className="ProjectSectionOne">
                        <img className="bg-image1"/>
                        <p className="LeftTitle">RENDEZ-VOUS</p>
                        <p className="RightTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
                    </div>
                
                    <div className="ProjectSectionTwo">
                        <img className="bg-image2"/>
                        <p className="RightTitle">DESSIN</p>
                        <p className="LeftTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
                    </div>
                
                    <div className="ProjectSectionThree">
                        <img className="bg-image3"/>
                        <p className="LeftTitle">SIMULATION</p>
                        <p className="RightTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
                    </div>
                
                    <div className="ProjectSectionFour">
                        <img className="bg-image4"/>
                        <p className="RightTitle">RÉALISATION</p>
                        <p className="LeftTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
                    </div>

                    <button className="buttonContactProject" onClick={this.openModal}>NOUS CONTACTER</button>
                    <ModalContactProject showModal={this.state.showModal} closeModal={this.closeModal} />
                
                </div>
                    
        </div>
    )
}
}