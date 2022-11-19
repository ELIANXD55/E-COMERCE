import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Dish from "../../utils/dish/Dish";
import "./Food.styles.css";

const Foods = () => {
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let store = [];
    let filter = sessionStorage.getItem("filter");
    setFilter(filter);
    axios
      .get(`http://localhost:4000/api/v1/products`)
      .then((res) => {
        res.data.data.response.forEach((element) => {
          if (filter === "products") {
            if (element._id === id) {
              store.push(element);
            }
          }
          if (filter === "categories") {
            if (element.categoryId === id) {
              store.push(element);
            }
          }
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setProducts(store);
        sessionStorage.removeItem("filter");
      });
  }, [id]);

  return (
    <section className="foods">
      <div className="foods-container">
        <h2>
          {filter === "categories"
            ? "Buscando platillos por la categoria"
            : "Buscando platillos"}
        </h2>
        {products.length === 0 ? (
          <p className="not-found">
            <b>No se encontraron productos</b>
          </p>
        ) : (
          products?.map((product) => (
            <Dish product={product} key={product._id} />
          ))
        )}
      </div>
    </section>
  );
};

export default Foods;
