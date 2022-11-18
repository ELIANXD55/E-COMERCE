import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import Policies from "../policies/Policies";
import "./FormAcount.styles.css";

function FormAcount() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="container-form">
          <h2 className="subtitle-form">Crea tu cuenta</h2>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Control required type="text" placeholder="Nombre" />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un nombre.
              </Form.Control.Feedback>
              <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Control required type="text" placeholder="Apellido" />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un apellido.
              </Form.Control.Feedback>
              <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Control required type="email" placeholder="Correo" />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un correo.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Control required type="password" placeholder="Contraseña" />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa una contraseña.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Button variant="success" type="submit" className="button-signup">
                Registro
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
      {/* <Policies /> */}
    </Container>
  );
}

export default FormAcount;
