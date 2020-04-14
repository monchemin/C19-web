import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import {Nav, Navbar, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar className="nav-background" variant="dark">
            <Navbar.Brand href="#home">Alafia - WinCovid19</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                <Nav.Link as={Link} to="/risk">Risks List</Nav.Link>
                <NavDropdown title="Location" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/risk">Countries</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/risk">Towns</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <Button variant="outline-info">Disconnection</Button>
            </Form>
        </Navbar>
    );
};


export default NavigationBar