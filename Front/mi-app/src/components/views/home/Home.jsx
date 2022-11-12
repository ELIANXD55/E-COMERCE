import React from "react";
import "./Home.styles.css";

const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>
      <div className="home-index">
        <h1 className="home-title">Sabores del Mundo</h1>
        <p className="home-short-description">
          Conoce la gastronomia internacional y sus sabores a un solo clic
        </p>
        <button className="button-home">Explorar</button>
      </div>
    </section>
  );
};

export default Home;
