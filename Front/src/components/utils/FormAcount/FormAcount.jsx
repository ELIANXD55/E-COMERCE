import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../loader/Loader";
// import Policies from "../policies/Policies";
import "./FormAcount.styles.css";

function FormAcount() {
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
      setIsLoading(true);
      const data = {
        name,
        lastName,
        email,
        password
      };
      axios
        .post(`http://localhost:4000/api/v1/users`, data)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Creación exitosa",
            showConfirmButton: false,
            timer: 2000
          });
          setIsLoading(false);
          setName("");
          setLastName("");
          setEmail("");
          setPassword("");
        })
        .catch(() => {
          setIsLoading(false);
          Swal.fire({
            icon: "error",
            title: "Ya existe un usuario con el correo suministrado",
            showConfirmButton: false,
            timer: 2000
          });
        });
    }
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="container-form">
          <h2 className="subtitle-form">Crea tu cuenta</h2>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa un nombre.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa un apellido.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control
                    required
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa un correo.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control
                    required
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa una contraseña.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <Button
                    variant="success"
                    type="submit"
                    className="button-signup"
                  >
                    Registro
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </div>
      </Form>
      {/* <Policies /> */}
    </Container>
  );
}

export default FormAcount;
