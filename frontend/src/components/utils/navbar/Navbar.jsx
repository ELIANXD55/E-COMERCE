import React from "react";
import "./Navbar.css";
import img_c from "../img/logo_candado.png";
import img_logo from "../img/logo.png";

export const Navbar = () => {
  return (
    <div>
      <header class="box">
        <div class="probando">
          <img src={img_logo} />
          <a class="tittle_nav" href="#">
            Sabores del mundo
          </a>
        </div>
        <nav>
          <ul class="nav_list">
            <li class="list_links">
              <a href="#">Inicio</a>
            </li>
            <li class="list_links">
              <a href="#">Explorar</a>
            </li>
            <li class="list_links">
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
        <div>
          <button class="btn">
            Iniciar sesión
            <img src={img_c} class="margin-img" />
          </button>
        </div>
        <a href="#">Registro</a>
      </header>
    </div>
  );
};
