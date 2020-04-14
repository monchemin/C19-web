import React from 'react';
import '../css/common.css';
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


const LogoutScreen = () => {
    return (
        <Navbar className="nav-background" variant="dark">
            <Navbar.Brand as={Link} to="/presentation">Alafia - WinCovid19</Navbar.Brand>
        </Navbar>
    );
};


export default LogoutScreen