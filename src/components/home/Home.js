import React, { useState } from "react";
import useTShirts from "../../hooks/useTshirt";
import Cart from "../cart/Cart";
import Tshirt from "../tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    const exists = cart.find((tShirt) => tShirt._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      //   const nCart = [...cart];
      //   setCart(nCart);
      alert("item already added");
    }
  };

  const removeFromCart = (selectedItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectedItem._id);

    setCart(rest);
  };
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tShirt) => (
          <Tshirt
            key={tShirt.id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
