import React from "react";
import { Col, Row } from "react-bootstrap";
import location from '../image/location.svg'
import message from '../image/message.svg'
import phone from '../image/phone.svg'
import planet from '../image/world.svg'
import '../styles/iconograpic.css'

function IconsContact(){
    return(
        <Row className="contact-icons">
            <Col xs={12} md={3}>
                <div className="iconography">
                    <div className="iconography-icon_section">
                        <img src={location} alt=""/>
                    </div>
                    <label>Dirección: <span>198 West 21th Street, Suite 721 New York NY 10016</span></label>
                </div>
            </Col>
            <Col xs={12} md={3}>
                <div className="iconography">
                    <div className="iconography-icon_section">
                        <img src={phone} alt=""/> 
                    </div>
                    <label>Teléfono: <span className="item">+ 1235 2355 98</span></label>
                </div>
            </Col>
            <Col xs={12} md={3}>
                <div className="iconography">
                    <div className="iconography-icon_section">
                        <img src={message} alt=""/>
                    </div>
                    <label>Email: <span className="item">info@yoursite.com</span></label>
                </div>
            </Col>
            <Col xs={12} md={3}>
                <div className="iconography">
                    <div className="iconography-icon_section">
                        <img src={planet} alt=""/>
                    </div>
                    <label>Website: <span className="item">yoursite.com</span></label>
                </div>
            </Col>
        </Row>
    );
}

export { IconsContact }
