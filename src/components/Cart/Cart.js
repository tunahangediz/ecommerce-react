import React, { useContext } from "react";
import shoppingContext from "../../context/shoppingContex";
import CartRow from "./CartRow";
import "./cart.css";
function Cart() {
  const { cart, cartOpen, setCartOpen } = useContext(shoppingContext);
  const className = cartOpen ? "cart cart-none" : "cart";
  const products = cart.map((product) => <CartRow product={product} />);
  return (
    <div className={className}>
      <button onClick={() => setCartOpen(!cartOpen)}>X</button>
      {products.length > 0 ? products : "Cart Empty"}
    </div>
  );
}

export default Cart;
