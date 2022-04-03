import React from "react";
import "./Tshirt.css";

const Tshirt = ({ handleAddToCart, tShirt }) => {
  const { name, picture, price } = tShirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={() => handleAddToCart(tShirt)}>Add to cart</button>
    </div>
  );
};

export default Tshirt;
