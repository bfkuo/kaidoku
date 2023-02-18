import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return( 
            <React.Fragment>
                <Navbar dark expand="md">
                    <NavbarBrand className="mx-4" href="/" >
                        <img src="assets/images/document.png" height="40" width="40" />
                        Kaidoku
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse className="justify-content-end" isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mx-4" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    Dashboard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/library">
                                    Library
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/words">
                                    Words
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/account">
                                    Account
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;