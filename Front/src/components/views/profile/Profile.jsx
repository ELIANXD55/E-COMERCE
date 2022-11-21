import React, { useEffect, useState } from "react";
import axios from "axios";
import Picture from "../../utils/img/img_perfil.png";
import Loader from "../../utils/loader/Loader";
import { motion } from "framer-motion";
import "./Profile.styles.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    let token = sessionStorage.getItem("token");

    let config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };

    axios
      .get(`http://localhost:4000/api/v1/users/currentUser`, config)
      .then((res) => {
        setUser(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const { name, lastName, email } = user;

  return (
    <motion.section
      className="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="text-center mb-4">
        <b>Información de Perfil</b>
      </h3>
      {isLoading ? (
        <div className="profile__spinner">
          <Loader />
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-4">
          <div>
            <img src={Picture} alt="profilePicture" />
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <p className="profile__info">
              <b>Nombre:</b> {name}
            </p>
            <p className="profile__info">
              <b>Apellido:</b> {lastName}
            </p>
            <p className="profile__info">
              <b>Correo:</b> {email}
            </p>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Profile;
