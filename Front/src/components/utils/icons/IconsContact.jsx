import React from "react";
import { Col, Row } from "react-bootstrap";
import location from "../img/location.svg";
import message from "../img/message.svg";
import phone from "../img/phone.svg";
// import planet from "../img/world.svg";
import "./IconsContact.styles.css";

function IconsContact() {
  return (
    <Row className="contact-icons">
      <Col xs={12} md={3}>
        <div className="iconography">
          <div className="iconography-icon_section">
            <img src={location} alt="" />
          </div>
          <p className="text-center">
            <b>Dirección:</b>
            <br />
            <span className="item">Pereira, Risaralda, Colombia</span>
          </p>
        </div>
      </Col>
      <Col xs={12} md={3}>
        <div className="iconography">
          <div className="iconography-icon_section">
            <img src={phone} alt="" />
          </div>
          <p className="text-center">
            <b>Teléfono: </b>
            <br />
            <span className="item">(+57) 314 7446 378</span>
          </p>
        </div>
      </Col>
      <Col xs={12} md={3}>
        <div className="iconography">
          <div className="iconography-icon_section">
            <img src={message} alt="" />
          </div>
          <p className="text-center">
            <b>Correo electrónico:</b>
            <br />
            <span className="item">saboresdelmundo45@gmail.com</span>
          </p>
        </div>
      </Col>
      {/* <Col xs={12} md={3}>
        <div className="iconography">
          <div className="iconography-icon_section">
            <img src={planet} alt="" />
          </div>
          <p>
            Website: <span className="item">yoursite.com</span>
          </p>
        </div>
      </Col> */}
    </Row>
  );
}

export default IconsContact;
