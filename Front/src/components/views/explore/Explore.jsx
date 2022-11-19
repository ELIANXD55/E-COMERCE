import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Img from "../../utils/img/Ellipse 1.png";
import "./Explore.styles.css";

const Explore = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [filter, setFilter] = useState("");
  const [response, setResponse] = useState([]);
  // const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    let filterType = isFilter ? "products" : "categories";
    axios
      .get(`http://localhost:4000/api/v1/${filterType}`)
      .then((res) => setResponse(res.data.data.response))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    let filterType = isFilter ? "products" : "categories";
    sessionStorage.setItem("filter", filterType);
    let filterUpper = filter.toUpperCase();
    response.forEach((element) => {
      if (element.name.toUpperCase() === filterUpper) {
        navigate(`/foods/${element._id}`);
      }
    });
  }, [response, filter, navigate, isFilter]);

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
          <form onSubmit={(e) => submitForm(e)}>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                placeholder={
                  isFilter ? "Buscar por nombre" : "Buscar por categoria"
                }
                className="p-1 mt-3 rounded input-border"
                onChange={(e) => setFilter(e.target.value)}
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
