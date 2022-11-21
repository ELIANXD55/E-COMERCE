import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../utils/loader/Loader";
import Dish from "../../utils/dish/Dish";
import "./Food.styles.css";

const Foods = () => {
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    let store = [];
    let filter = sessionStorage.getItem("filter");
    setFilter(filter);
    axios
      .get(`http://localhost:4000/api/v1/products`)
      .then((res) => {
        setIsLoading(false);
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
      .catch(() => setIsLoading(false))
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
        {isLoading ? (
          <div className="foods__spinner">
            <Loader />
          </div>
        ) : products.length === 0 ? (
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
