import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
   const cart = useSelector((state) => state.cart);
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent:"space-around" }}>
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: {cart.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
