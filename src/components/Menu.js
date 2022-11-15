import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/menu.css'
import logo from '../image/Logo.svg'

function Menu() {
    return(
        <Navbar>
            <Container>
                <Row className="menu">
                    <Col xs={12} md={8}>
                        <Navbar.Brand to={`/login/`}>
                            <img className="logo" src={logo} alt=""/>
                            Sabores Del Mundo
                        </Navbar.Brand>
                    </Col>
                    <Col xs={12} md={4}>
                        <Nav className="me-auto menu-nav">
                            <Nav.Link href={`/login/`}>Inicio</Nav.Link>
                            <Nav.Link href={`/`}>Explorar</Nav.Link>
                            <Nav.Link href={`/contact/`}>Contacto</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export { Menu }