import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <Link to="/" className="menu-display navbar-text">
                Inicio
              </Link>
              <Link to="/explore" className="menu-display navbar-text">
                Explorar
              </Link>
              <Link to="/contact" className="menu-display navbar-text">
                Contacto
              </Link>
              <Link
                to="/login"
                className={
                  isValidateToken ? "menu-hidden" : "menu-display navbar-text"
                }
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/signup"
                className={
                  isValidateToken ? "menu-hidden" : "menu-display navbar-text"
                }
              >
                Registrarse
              </Link>
              <Link
                to="/profile"
                className={
                  isValidateToken ? "menu-display navbar-text" : "menu-hidden"
                }
              >
                Perfil
              </Link>
              <Link
                to="/"
                className={
                  isValidateToken ? "menu-display navbar-text" : "menu-hidden"
                }
                onClick={(e) => signOff(e)}
              >
                Cerrar sesión
              </Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Menu;
