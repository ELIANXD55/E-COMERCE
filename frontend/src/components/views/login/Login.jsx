import React from "react";
import "./Login.css";
import img_l from "../../utils/img/img_login.png";

export const Login = () => {
  return (
    <div>
      <main>
        <h2 class="tittle">Sabores del Mundo</h2>
        <div class="container-flex">
          <div class="container-form">
            <form action="">
              <div>
                <input
                  type="email"
                  id="email"
                  class="inputs"
                  required
                  placeholder="Correo electronico"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  class="inputs"
                  required
                  placeholder="Contraseña"
                />
              </div>
              <button class="btn">Iniciar sesión</button>
              <button class="btn_sign_up">Crear nueva cuenta</button>
            </form>
          </div>
          <div class="container-image">
            <img src={img_l} />
          </div>
        </div>
      </main>
    </div>
  );
};
