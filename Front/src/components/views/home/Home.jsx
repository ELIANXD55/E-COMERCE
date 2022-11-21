import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.styles.css";

const Home = () => {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="home-banner"></div>
      <div className="home-index">
        <h1 className="home-title">Sabores del Mundo</h1>
        <p className="home-short-description">
          Conoce la gastronomia internacional y sus sabores a un solo clic
        </p>
        <button className="button-home">
          <Link to="/explore" className="link">
            Explorar
          </Link>
        </button>
      </div>
    </motion.section>
  );
};

export default Home;
