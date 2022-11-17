import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../utils/banner/Banner";
import FormContact from "../../utils/FormContact/FormContact";
import IconsContact from "../../utils/icons/IconsContact";

function Contact() {
  return (
    <section style={{ height: "70vh" }}>
      <Container>
        <IconsContact />
        <Row className="contact-section">
          <Col xs={12} md={6}>
            <FormContact />
          </Col>
          <Col xs={12} md={6}>
            <Banner />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
