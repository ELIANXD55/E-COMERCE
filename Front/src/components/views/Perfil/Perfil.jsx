import React from "react";
import img_l from "../../utils/img/img_login.png";
import img_p from "../../utils/img/img_perfil.png";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../utils/banner/Banner";
//import Datos del formulario//
import "./Contact.styles.css";

function Perfil() {
    return (
        <section className="container-perfil">
         <h1 className="title">Sabores del Mundo</h1>
        <h4 className="Welcome to our App. We hope that you enjoy"></h4> 
        <img className="img_perfil.png"/>
        <div className="email"></div>
         <div className="password"></div>
         </section>
  );
};

export default Perfil;
