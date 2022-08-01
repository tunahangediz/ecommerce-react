import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import shoppingContext from "../context/shoppingContex";
import "./styles/navbar.css";

function Navbar() {
  const { cart, setCartOpen, cartOpen } = useContext(shoppingContext);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>SHOPSIY</h1>
      </NavLink>
      <div className="navbar-nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-shop-active nav-shop" : "nav-shop"
          }
          to="/shop"
        >
          SHOP
        </NavLink>
        <button onClick={() => setCartOpen(!cartOpen)}>
          CART <strong> {cart.length} </strong>{" "}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
