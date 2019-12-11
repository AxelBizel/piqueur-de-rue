import React from 'react';
import './modalPortfolio.css';
import cosmic from '../img/tatoueurs/cosmic.jpg';
import indienne from '../img/tatoueurs/Indienne_gp.jpg';
import insta from '../img/instagram.png';
import CarrouselPortfolio from './carrouselPortfolio';


const PortfolioModal = (props) => {
        const {showModal} = props;
        
        return(
            <>           
                <div className="firstModal" style={{display : showModal? "flex" : "none"}} onClick={() => props.closeModal()}></div>
                {showModal ? 
                    <aside className="secondModal" role="dialog">
                        <button onClick={ props.closeModal}>X</button>
                        <h1>Cosmic Billie</h1>
                        <div className="textEtImg">
                            <img className="imgPresentation" src={cosmic} alt="photo de Cosmic Billie" />
                            <img src={insta} style={{width:"100px"}}/>
                            <p className="textPresentation">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                        <button>Contacter tatoueur</button>
                        <div className="sectionImgs">
                            <img className="imgPrincipale" src={indienne} alt="réalisation du tatoueur" />
                            <CarrouselPortfolio />
                        </div>
                    </aside> : null
                }
            </>
        )

}

export default PortfolioModal;




