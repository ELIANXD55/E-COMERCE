import axios from "axios";
import React, { useState } from "react";
import img_l from "../../utils/img/img_login.png";
import Swal from "sweetalert2";
import "./Login.styles.css";

function Login({ setIsLogin, isLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios
      .post(`http://localhost:4000/api/v1/users/login`, data)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          showConfirmButton: false,
          timer: 2000,
        });
        sessionStorage.setItem("token", res.data.data.token);
        setIsLogin(!isLogin);
        setEmail("");
        setPassword("");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Credenciales invalidas",
          showConfirmButton: false,
          timer: 2000,
        });
        setEmail("");
        setPassword("");
      });
  };

  return (
    <section className="container-login">
      <h1 className="title">Sabores del Mundo</h1>
      <div className="login-container-flex">
        <div className="login-container-form">
          <form onSubmit={(e) => login(e)}>
            <div>
              <input
                type="email"
                id="email"
                className="login-inputs"
                required
                placeholder="Correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                className="login-inputs"
                required
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
}

export default Login;
