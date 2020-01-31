import React, { useState } from 'react';
import { Collapse, Navbar as NavbarStrap, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import logoFB from "../img/logo/logoFB.png";
import logoIG from "../img/logo/logoIG.png";
import Headroom from 'react-headroom'; /* https://kyleamathews.github.io/react-headroom/ */
import './navbar.css'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
        collapsed: true
        };
    }


    componentDidMount() {
        window.addEventListener("keydown", e => {
        if (e.key === "Escape" || e.key === "Esc") {
            return this.toggleNavbar();
        }
        });
    }

    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed
        });
    }
    
    closeNavbar() {
        if (this.state.collapsed == false ) {
        this.toggleNavbar();
        }
        
    }

    render() {
    return (
        <Headroom >
            <div className="styleNavbar" >
                <NavbarStrap light expand="md">
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <div className="closeOutside">
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink onClick={this.closeNavbar} href="#agency" className="styleLink">L'Agence</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNavbar} href="#team" className="styleLink">La Team</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNavbar} href="#guests" className="styleLink">Les Guests</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNavbar} href="#yourproject" className="styleLink">Votre Projet</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNavbar} href="#footer" className="styleLink">Contactez-nous</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/login" className="loginLink">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <div className="RSNavbar">
                                            <a href="https://www.facebook.com/piqueurderue/" target="_blank"><i class="fa fa-facebook-square logoRSNavbar"></i></a>
                                            <a href="https://www.instagram.com/piqueurderue/?hl=fr" target="_blank"><i class="fa fa-instagram logoRSNavbar"></i></a>
                                        </div>
                                </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Collapse>
                </NavbarStrap>
            </div>
        </Headroom>
    )
}
}

export default Navbar;