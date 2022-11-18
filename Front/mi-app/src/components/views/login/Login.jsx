import React from "react";
import img_l from "../../utils/img/img_login.png";
import "./Login.styles.css";

export const Login = () => {
  return (
    <section className="container-login">
      <h1 className="title">Sabores del Mundo</h1>
      <div className="login-container-flex">
        <div className="login-container-form">
          <form>
            <div>
              <input
                type="email"
                id="email"
                className="login-inputs"
                required
                placeholder="Correo electronico"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                className="login-inputs"
                required
                placeholder="Contraseña"
              />
            </div>
            <button className="login-btn">Crear nueva cuenta</button>
          </form>
        </div>
        <div>
          <img src={img_l} alt="dish" className="login-img" />
        </div>
      </div>
    </section>
  );
};

export default Login;
