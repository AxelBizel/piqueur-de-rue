import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Headroom from 'react-headroom';
import './navbar.css'

const NavbarTest = (props) => {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
        <div>
            <Headroom>
                <div className="styleNavbar">
                    <Navbar  expand="md">
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
                    </Navbar>
                </div>
            </Headroom>
        </div>
    )
}

export default NavbarTest;