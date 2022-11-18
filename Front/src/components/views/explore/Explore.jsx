import React, { useState } from "react";
import Img from "../../utils/img/Ellipse 1.png";
import "./Explore.styles.css";

const Explore = () => {
  const [isFilter, setIsFilter] = useState(false);

  return (
    <section className="container-explore">
      <h1 className="title">Sabores del Mundo</h1>
      <div className="d-flex justify-content-between pt-4">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h2 className="explore-title">
            <strong>Busca nuevas experiencias</strong>
          </h2>
          <div className="form-check form-switch d-flex justify-content-center ps-0">
            <span className="me-2 ms-2">Categoria</span>
            <input
              className="form-check-input cursor me-2 ms-2"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => setIsFilter(!isFilter)}
            />
            <span className="me-2 ms-2">Nombre</span>
          </div>
          <form>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                placeholder={
                  isFilter ? "Buscar por nombre" : "Buscar por categoria"
                }
                className="p-1 mt-3 rounded input-border"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="button-explore">Buscar</button>
            </div>
          </form>
        </div>
        <div>
          <img className="explore-img" src={Img} alt="tacos" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
