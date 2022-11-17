import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/Logo.svg";
import "./Menu.styles.css";

function Menu() {
  return (
    <Navbar>
      <Container>
        <Row className="menu">
          <Col xs={12} md={6}>
            <Navbar.Brand to={`/`}>
              <img className="logo" src={logo} alt="icon" />
              Sabores Del Mundo
            </Navbar.Brand>
          </Col>
          <Col xs={12} md={6}>
            <Nav className="me-auto menu-nav">
              <Nav.Link
                href={`/`}
                className="d-flex justify-content-center align-items-center text-center"
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                href={`/explore`}
                className="d-flex justify-content-center align-items-center text-center"
              >
                Explorar
              </Nav.Link>
              <Nav.Link
                href={`/contact/`}
                className="d-flex justify-content-center align-items-center text-center"
              >
                Contacto
              </Nav.Link>
              <Nav.Link
                href={`/login/`}
                className="d-flex justify-content-center align-items-center text-center"
              >
                Iniciar Sesión
              </Nav.Link>
              <Nav.Link
                href={`/signup/`}
                className="d-flex justify-content-center align-items-center text-center"
              >
                Registrarse
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Menu;
