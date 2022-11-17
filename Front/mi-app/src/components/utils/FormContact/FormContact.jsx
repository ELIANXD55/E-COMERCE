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
              <Form.Label>NOMBRE COMPLETO</Form.Label>
              <Form.Control required type="text" placeholder="Name" />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>CORREO ELECTRONICO</Form.Label>
              <Form.Control required type="text" placeholder="Email" />
              <Form.Control.Feedback type="invalid">
                Please provide your email.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>SUBJECT</Form.Label>
              <Form.Control required type="text" placeholder="Subject" />
              <Form.Control.Feedback type="invalid">
                Please provide a subject.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>MENSAJE</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
          </Row>
          <Button variant="success" type="submit">
            Enviar Mensaje
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormContact;
