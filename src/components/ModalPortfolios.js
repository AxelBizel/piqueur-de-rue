import React, {Component, Fragment,createRef} from 'react';
import cosmic from '../img/cosmic.jpg';
import modalPortfolios from './modalPortfolios.css';


class ModalPortfolios extends Component {
    constructor(props) {
        super(props);
        this.state= {
            showModal: false,
        };
        this.myRef = createRef();

    }

    openModal=(e)=> {
        console.log('onclic')
        let {showModal} = this.state;
        e.preventDefault()
        showModal = true;
        this.setState({ showModal })
    }


    componentDidMount(){
        // document.getElementsByClassName(".js-modal").forEach(element => {
        //     element.addEventListener("click", this.openModal)
        // })

        this.myRef.current.addEventListener("click", this.openModal)
    }
    render(){
        return(
            <Fragment> 
                <button href="#modal1" ref={this.myRef } className="js-modal">Accéder à son portfolio</button>
                {this.state.showModal ? 
                    <aside id="modal1" className="modal" role="dialog">
                        <div className="modal-wrapper">
                            <h1>Cosmic Billie</h1>
                            <div className="textEtImg">
                                <img className="imgPresentation" src={cosmic} alt="photo de Cosmic Billie" />
                                <p className="textPresentation">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                            <button>Contacter tatoueur</button>
                        </div>
                    </aside> : null
                }
            </Fragment>
        )
    }
}

export default ModalPortfolios;