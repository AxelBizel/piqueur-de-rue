// import React, {Component} from 'react';
// import './yourproject.css';
// import image1 from '../img/projet/1rendezvous.jpg';
// import image2 from '../img/projet/2dessin.jpg';
// import image3 from '../img/projet/3simulation.jpg';
// import image4 from '../img/projet/4realisation.jpg';

// /*MODAL CONTACT PROJET*/

// const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? "modal display-block" : "modal display-none";
  
//     return (
//       <div className={showHideClassName}>
//         <section className="modal-main">
//           {children}
//           <button onClick={handleClose}>close</button>
//         </section>
//       </div>
//     );
//   };

// export default class YourProject extends Component {
//     state = { 
//         show: false 
//     };

//     showModal = () => {
//         this.setState({ show: true });
//     };

//     hideModal = () => {
//         this.setState({ show: false });
//     };

//     render(){
//      return (
//         <div>
//             <h1 className="HeaderSection">VOTRE PROJET</h1>
//                 <div className="SectionProjet">
//                     <div className="ProjectSectionOne">
//                         <img className="bg-image" src={image1} />
//                         <p className="LeftTitle">RENDEZ-VOUS</p>
//                         <p className="RightTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
//                     </div>
                
//                     <div className="ProjectSectionTwo">
//                         <img className="bg-image" src={image2} />
//                         <p className="RightTitle">DESSIN</p>
//                         <p className="LeftTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
//                     </div>
                
//                     <div className="ProjectSectionThree">
//                         <img className="bg-image" src={image3} />
//                         <p className="LeftTitle">SIMULATION</p>
//                         <p className="RightTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
//                     </div>
                
//                     <div className="ProjectSectionFour">
//                         <img className="bg-image" src={image4} />
//                         <p className="RightTitle">RÉALISATION</p>
//                         <p className="LeftTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
//                     </div>

//                     <Modal show={this.state.show} handleClose={this.hideModal}>
//                         <p>Modal</p>
//                         <p>Data</p>
//                     </Modal>
//                     <button className="buttonContactProjet" onClick={this.showModal}>
//                     NOUS CONTACTER
//                     </button>
                
//                 </div>
                    
//         </div>
//     )
// }
// }

import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class YourProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Title</h1>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}