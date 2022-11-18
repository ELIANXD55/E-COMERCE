import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormAcount from "../../utils/FormAcount/FormAcount";
import Banner from "../../utils/banner/Banner";
import "./SignUp.styles.css";

function Login() {
  return (
    <section style={{ height: "70vh" }}>
      <h1 className="title">Sabores del Mundo</h1>
      <Container className="container-signup-grid">
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <FormAcount />
          </Col>
          <Col xs={12} md={6}>
            <Banner />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
