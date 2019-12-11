import React from 'react';
import './yourproject.css';
// import image1 from '../img/projet/1rendezvous.jpg';
import image2 from '../img/projet/2dessin.jpg';
import image3 from '../img/projet/3simulation.jpg';
import image4 from '../img/projet/4realisation.jpg';


export default function YourProject() {
    return (
        <div>
            <h1 className="HeaderSection">VOTRE PROJET</h1>
                <div className="SectionProjet">
                        <div className="ProjectSectionOne">
                            <p className="LeftTitle">RENDEZ-VOUS</p>
                            <p className="RightTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
                        </div>
                    
                        <div className="ProjectSectionTwo">
                            <p className="RightTitle">DESSIN</p>
                            <p className="LeftTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
                        </div>
                    
                        <div className="ProjectSectionThree">
                            <p className="LeftTitle">SIMULATION</p>
                            <p className="RightTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
                        </div>
                    
                        <div className="ProjectSectionFour">
                            <p className="RightTitle">RÉALISATION</p>
                            <p className="LeftTextSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas quis. Sed interdum sed diam at finibus. Vestibulum nec sem urna. In mollis purus et libero tincidunt convallis.</p>
                        </div>
                </div>
        </div>
    )
}