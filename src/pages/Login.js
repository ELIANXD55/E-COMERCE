import React from "react";
import { FormAcount } from "../components/FormAcount";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Banner } from "../components/Banner";
import '../styles/form.css'

function Login(){
    return(
        <React.Fragment>
            <h1 className="title">Sabores del Mundo</h1>
            <Container>
                <Row>
                    <Col xs={12} md={6}><FormAcount/></Col>
                    <Col xs={12} md={6}><Banner/></Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export { Login }