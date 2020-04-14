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
                <Nav.Link as={Link} to="/risk">{ localStorage.getItem('user') ? "Risks List" : null}</Nav.Link>
                { localStorage.getItem('user') ?
                <NavDropdown title="Location" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/risk">Countries</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/risk">Towns</NavDropdown.Item>
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