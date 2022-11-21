import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../utils/banner/Banner";
import FormContact from "../../utils/formContact/FormContact";
import IconsContact from "../../utils/icons/IconsContact";
import { motion } from "framer-motion";
import "./Contact.styles.css";

function Contact() {
  return (
    <motion.section
      style={{ height: "70vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container className="container-contact-grid">
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
    </motion.section>
  );
}

export default Contact;
