import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top">
                <Container>
                    <Nav className="mx-auto">
                    <h2>E- Hospital</h2>
                      <ul className="menu-list">
                            <Link to="/home">
                                <li className="items">Home</li>
                            </Link>
                            <Link to="/services">
                                <li className="items">Services</li>
                            </Link>
                            <Link to="/specialities">
                                <li className="items">Specialities</li>
                            </Link>
                            <Link to="/appointment">
                                <li className="items">Appointment</li>
                            </Link>
                            <Link to="/login">
                                <li className="items">Login</li>
                            </Link>
                            {/* logout */}
                            {user?.email && 
                            <Button  onClick={logout} className="text-white d-block">
                                Logout
                            </Button>}
                            <span className="ms-3">{user.displayName}</span>
                      </ul>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;