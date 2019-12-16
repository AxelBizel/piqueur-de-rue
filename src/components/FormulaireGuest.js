import React from 'react';
import './FormulaireGuest.css';



const FormulaireGuest = (props) => {
    const {showModal} = props;
    return(
        <>           
            <div className="firstModal" style={{display : showModal? "flex" : "none"}} onClick={() => props.closeModal()}></div>

            {showModal ? 
                <aside className="secondModal" role="dialog">
                    <button className= "button_modal_guest" onClick={ props.closeModal}>X</button>
                    <h1>Devenez Guest</h1>
                    <p className="text_presentation"></p>
                    <div className="form_input">
                        <p className="guest_presentation">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <p className="input_title">PSEUDO</p>
                             <input/>
                        <p className="input_title">STYLE</p>
                            <input/>
                        <p className="input_title">MESSAGE</p>
                            <textarea/>
                            <p className="input_title">LIEN COMPTE INSTAGRAM</p>
                            <input/>
                    </div>
                    <button className="button_guest">+ Devenez Guest</button>
                </aside> : null
            }
        </>
    )

}
export default FormulaireGuest;

