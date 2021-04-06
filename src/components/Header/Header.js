import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../components/assets/css/bootstrap.min.css';
import logo from '../../images/khulna_tigers_logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="light">
                <div className="container">
                <Navbar.Brand href="/home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/photos">PHOTOS</Nav.Link>
                        <Nav.Link href="/videos">VIDEOS</Nav.Link>
                        <Nav.Link href="/the-tigers">THE TIGERS</Nav.Link>
                        <Nav.Link href="/corporate">CORPORATE</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    );
};

export default Header;