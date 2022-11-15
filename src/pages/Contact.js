import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../components/Banner";
import { FormContact } from "../components/FormContact";
import { IconsContact } from "../components/IconsContact";

function Contact(){
    return(
        <React.Fragment>
            <Container>
                <IconsContact/>
                <Row className="contact-section">
                    <Col xs={12} md={6}><FormContact/></Col>
                    <Col xs={12} md={6}><Banner/></Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export { Contact }
