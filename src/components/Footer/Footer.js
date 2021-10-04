// all necessary file imported
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark text-light text-decoration-none p-2">
            <Container >
                <Row className='my-4'>
                    <Col xs={6} md={4}>
                        <h5 className>Learn More</h5>
                    </Col>
                    <Col xs={6} md={4}>
                        <h5>Services</h5>
                        <Row>
                            <NavLink className='text-light text-decoration-none' to='/home'>Home</NavLink>
                            <NavLink className='text-light text-decoration-none' to='/about'>About Us</NavLink>
                            <NavLink className='text-light text-decoration-none' to='/services'>Services</NavLink>
                            <NavLink className='text-light text-decoration-none' to='/tutorial'>Tutorial</NavLink>
                        </Row>
                    </Col>
                    <Col xs={6} md={4}>
                        <h5>Contact Us</h5>
                        <p>somonsikder777@gmail.com</p>
                        <p>+8801626038733</p>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
};

export default Footer;