import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import {Nav, Navbar, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar className="nav-background" variant="dark">
            <Navbar.Brand href="#home">Alafia - WinCovid19</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" >{ localStorage.getItem('user') ? "Home" : null}</Nav.Link>
                { localStorage.getItem('user') ?
                    <NavDropdown title="Lists" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/all">All</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/risk">Risk</NavDropdown.Item>
                    </NavDropdown> : null}
                { localStorage.getItem('user') ?
                    <NavDropdown title="Test" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/add-result">Set Result</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/tested-list">Tested</NavDropdown.Item>
                    </NavDropdown> : null}

                { localStorage.getItem('user') ?
                <NavDropdown title="Location" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/country">Countries</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/town">Towns</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/district">District</NavDropdown.Item>
                </NavDropdown> : null}

                { localStorage.getItem('user') ?
                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/country">User</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/town">Change Password</NavDropdown.Item>
                    </NavDropdown> : null}
            </Nav>
            { localStorage.getItem('user') ?
            <Form inline>
                <Button variant="outline-info">Disconnection</Button>
            </Form> : null}
        </Navbar>
    );
};


export default NavigationBar