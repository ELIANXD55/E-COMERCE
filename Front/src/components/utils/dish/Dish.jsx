import React from "react";
import "./Dish.styles.css";

const Dish = ({ product }) => {
  // Si no encuentra algo, no mostrar nada -> Esto aplica mas para las categorias

  return (
    <div className="product-card">
      <img className="product-img" src={product.picture} alt={product.name} />
      <h5 className="product-title">
        <b>{product.name}</b>
      </h5>
      <p className="product-shortDescription">{product.shortDescription}</p>
      {/* <button className="button-dish">Ver mas</button> */}
    </div>
  );
};

export default Dish;
