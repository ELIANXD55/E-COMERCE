import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../utils/img/breakfast.png";

function PageNotFound() {
  return (
    <section style={{ height: "70vh" }}>
      <Container>
        <Row sm={12} md={12}>
          <Col sm={12} md={6}>
            <div
              style={{
                alignItems: "center",
                display: "grid",
                justifyItems: "center",
                margin: "5rem 0",
              }}
            >
              <h2
                style={{
                  color: "var(--primary-green)",
                  fontSize: "9rem",
                  fontWeight: "700",
                }}
              >
                404
              </h2>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.47)",
                  fontSize: "2rem",
                  fontWeight: "500",
                }}
              >
                Pagina no encontrada
              </p>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img
              src={image}
              alt="breakfast"
              style={{
                borderRadius: "50%",
                width: "100%",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PageNotFound;
