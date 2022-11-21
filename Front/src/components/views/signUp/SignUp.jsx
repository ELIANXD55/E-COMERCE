import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormAcount from "../../utils/formAcount/FormAcount";
import Banner from "../../utils/banner/Banner";
import { motion } from "framer-motion";
import "./SignUp.styles.css";

function Login() {
  return (
    <motion.section
      style={{ height: "70vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
    </motion.section>
  );
}

export default Login;
