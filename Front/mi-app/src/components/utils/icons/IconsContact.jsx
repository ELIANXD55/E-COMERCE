import React from "react";
import { Col, Row } from "react-bootstrap";
import location from "../img/location.svg";
import message from "../img/message.svg";
import phone from "../img/phone.svg";
import planet from "../img/world.svg";
import "./IconsContact.styles.css";

function IconsContact() {
  return (
    <Row className="contact-icons">
      <Col xs={12} md={3}>
        <div className="iconography">
          <div className="iconography-icon_section">
            <img src={location} alt="" />
          </div>
          <label>
            Dirección:
            <span>198 West 21th Street</span>
          </label>
        </div>
      </Col>
      <Col xs={12} md={3}>
        <div className="iconography">
          <div className="iconography-icon_section">
            <img src={phone} alt="" />
          </div>
          <label>
            Teléfono: <span className="item">+ 1235 2355 98</span>
          </label>
        </div>
      </Col>
      <Col xs={12} md={3}>
        <div className="iconography">
          <div className="iconography-icon_section">
            <img src={message} alt="" />
          </div>
          <label>
            Email: <span className="item">info@yoursite.com</span>
          </label>
        </div>
      </Col>
      <Col xs={12} md={3}>
        <div className="iconography">
          <div className="iconography-icon_section">
            <img src={planet} alt="" />
          </div>
          <label>
            Website: <span className="item">yoursite.com</span>
          </label>
        </div>
      </Col>
    </Row>
  );
}

export default IconsContact;
