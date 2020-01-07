import React, { useState } from 'react';
import { Collapse, Navbar as NavbarStrap, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Headroom from 'react-headroom'; /* https://kyleamathews.github.io/react-headroom/ */
import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
        <div>
            <Headroom style={{transition: 'all 0.4s ease-in-out'}}>
                <div className="styleNavbar" >
                    <NavbarStrap light expand="md">
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink href="#agency" className="styleLink">L'Agence</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#permanentartists" className="styleLink">La Team</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#guests" className="styleLink">Les Guests</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#yourproject" className="styleLink">Votre Projet</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#footer" className="styleLink">Contactez-nous</NavLink>
                                    </NavItem>
                                </Nav>
                            <NavLink href="/components/" className="loginLink">Login</NavLink>
                        </Collapse>
                    </NavbarStrap>
                </div>
            </Headroom>
        </div>
    )
}

export default Navbar;