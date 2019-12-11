import React, { useState } from 'react';
import { Collapse, Navbar as NavbarStrap, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Headroom from 'react-headroom'; /* https://kyleamathews.github.io/react-headroom/ */
import './navbar.css'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
        <div>
            <Headroom style={{transition: 'all 1s ease-in-out'}}>
                <div className="styleNavbar">
                    <NavbarStrap  expand="md">
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/components/" className="styleLink">L'Agence</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/components/" className="styleLink">La Team</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/components/" className="styleLink">Les Guests</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/components/" className="styleLink">Votre Projet</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/components/" className="styleLink">Contactez-nous</NavLink>
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