import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/Logo.svg";
import "./Menu.styles.css";

function Menu({ isLogin }) {
  const [isValidateToken, setIsValidateToken] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsValidateToken(true);
    }
  }, [isLogin]);

  const signOff = (e) => {
    window.location.reload();
    sessionStorage.removeItem("token");
  };

  return (
    <Navbar>
      <Container className="container-menu-grid">
        <Row className="menu">
          <Col xs={12} md={6}>
            <Navbar.Brand to={`/`}>
              <img className="logo" src={logo} alt="icon" />
              Sabores Del Mundo
            </Navbar.Brand>
          </Col>
          <Col xs={12} md={6}>
            <Nav className="me-auto menu-nav">
              <Nav.Link href={`/`} className="menu-display">
                Inicio
              </Nav.Link>
              <Nav.Link href={`/explore`} className="menu-display">
                Explorar
              </Nav.Link>
              <Nav.Link href={`/contact/`} className="menu-display">
                Contacto
              </Nav.Link>
              <Nav.Link
                href={`/login/`}
                className={isValidateToken ? "menu-hidden" : "menu-display"}
              >
                Iniciar Sesión
              </Nav.Link>
              <Nav.Link
                href={`/signup/`}
                className={isValidateToken ? "menu-hidden" : "menu-display"}
              >
                Registrarse
              </Nav.Link>
              <Nav.Link
                href={`/`}
                className={isValidateToken ? "menu-display" : "menu-hidden"}
              >
                Perfil
              </Nav.Link>
              <Navbar.Text
                className={
                  isValidateToken ? "menu-display navbar-text" : "menu-hidden"
                }
                onClick={(e) => signOff(e)}
              >
                <a href="/">Cerrar sesión</a>
              </Navbar.Text>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Menu;
