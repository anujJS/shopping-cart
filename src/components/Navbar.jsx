import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="nav">
      <p className="logo">Anuj Store</p>
      <div style={{ position: "relative" }}>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span
          style={{
            position: "absolute",
            border: "1px solid green",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            top: "-18px",
            right: "-10px",
            backgroundColor: "white",
          }}
        >
          {cartItems.length}
        </span>
        {/* <span className="cartCount">Cart items: {cartItems.length}</span> */}
      </div>
    </div>
  );
};

export default Navbar;
