import React from "react";
import "./Product.css";

const product = ({ id, benefit, type, price, image }) => {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <h1>{type}</h1>
          <p>{benefit}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
      </div>
      <img className="card_img" src={image} alt="" />
    </div>
  );
};

export default product;
