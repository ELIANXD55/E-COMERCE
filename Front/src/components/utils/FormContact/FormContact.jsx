import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./FormContact.styles.css";

function FormContact() {
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
        <div className="container-form contact">
          <h2 className="subtitle-form">Contactanos</h2>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control required type="text" placeholder="Nombre" />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un nombre.
              </Form.Control.Feedback>
              <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control required type="email" placeholder="Correo" />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un correo.
              </Form.Control.Feedback>
              <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>Asunto</Form.Label>
              <Form.Control required type="text" placeholder="Asunto" />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un asunto.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
            </Form.Group>
          </Row>
          <Button variant="success" type="submit" className="button-contact">
            Enviar Mensaje
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormContact;
