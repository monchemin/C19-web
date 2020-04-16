import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link, Redirect, useHistory, withRouter, withRoutes} from "react-router-dom";
import {Nav, Navbar, Form, Button, NavDropdown} from 'react-bootstrap';
import "../css/navbar.css";
import {useSelector} from "react-redux";
import useRematchDispatch from "../hooks/useRematchDispatch";

const NavigationBar = () => {
    const [logout, setLogout] = useState(false);
    const login = useSelector(state => state.login.isLoad);
    const redirect = useSelector(state => state.login.redirect);
    const [value, setValue] = useState(false);
    const history = useHistory();
    const {isLoad} = useRematchDispatch(dispatch => ({
        isLoad: dispatch.login.isLoad,
    }));
    let hit = false;

    function handleClick() {
        localStorage.clear();
        setLogout(true);
        setValue(true);
        hit = true

    }
    return (
        <main>
            {logout  ? <Redirect to ="/logout" /> :
        <Navbar className="nav-background" variant="dark">
            <Navbar.Brand as={Link} to="/presentation">Alafia - WinCovid19</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" >{ localStorage.getItem('user') ? "Dashboard" : null}</Nav.Link>
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
                <Button variant="outline-info"  onClick={() => {handleClick()}}>Disconnection</Button>
            </Form> : null}
        </Navbar>
            }
        </main>
    );
};


export default withRouter(NavigationBar)