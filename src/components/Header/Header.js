import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">E-Hospital</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/home" className="text-white">Home/</Link>
                        <Link to="/appointment" className="text-white">Appointment/</Link>
                        <Link to="/services" className="text-white">Services/</Link>
                        <Link to="/specialities" className="text-white">Specialities/</Link>
                        <Link to="/login" className="text-white">Login/</Link>
                        <Link to="/logout" className="text-white">Log out</Link>
            
                        
{/*                         
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#appointment">Appointment</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#specialities">Specialities</Nav.Link>
                        <Nav.Link href="#Login">Login</Nav.Link>
                        <Nav.Link href="#Logout">Log out</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;