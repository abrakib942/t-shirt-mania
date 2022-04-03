import React from "react";
import Tshirt from "../tshirt/Tshirt";
import "./Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  //conditional rendering options
  // 1. Element variable
  // 2. Ternary operator [condition ? true : false]
  // 3. && operator
  // 4. || operator

  let command;
  if (cart.length === 0) {
    command = <p>Please Add some items</p>;
  } else if (cart.length === 1) {
    command = <p>Please add more</p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding item</small>
      </p>
    );
  }

  return (
    <div>
      <h2>items selected: {cart.length}</h2>

      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => removeFromCart(tShirt)}>X</button>
        </p>
      ))}
      {command}
      {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
      {cart.length === 3 && (
        <div className="orange">
          <h3>Trigonal</h3>
          <p>Tin jon ke ki gift diba</p>
        </div>
      )}
      {cart.length === 0 || <div className="orange">YAY! you are buying</div>}
    </div>
  );
};

export default Cart;
