// all necessary file imported
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // nav item active style
    const activeStyle = {
        "borderBottom": "1px solid white"
    }
    return (
        <div>
              <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Learn More</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className='nav-item' to='/home' activeStyle={activeStyle}>Home</NavLink>
                        <NavLink className='nav-item' to='/about' activeStyle={activeStyle}>About Us</NavLink>
                        <NavLink className='nav-item' to='/services' activeStyle={activeStyle}>Services</NavLink>
                        <NavLink className='nav-item' to='/tutorial' activeStyle={activeStyle}>Tutorial</NavLink>
                    </Nav>
                </Container>
            </Navbar>
                
        </div>
    );
};

export default Header;