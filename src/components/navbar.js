import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import './navbar.css'

const NavbarTest = (props) => {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
        <div className="styleNavbar">
            <Navbar light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className="styleLink">
                                <NavLink href="/components/">L'Agence</NavLink>
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
                    <NavLink href="/components/" className="styleLink">Login</NavLink>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarTest;