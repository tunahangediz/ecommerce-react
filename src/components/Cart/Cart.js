import React, { useContext } from "react";
import shoppingContext from "../../context/shoppingContex";
import CartRow from "./CartRow";
import "./cart.css";
function Cart() {
  const { cart, cartOpen, setCartOpen } = useContext(shoppingContext);
  const classNameCart = !cartOpen ? "cart-go-in-right " : "";
  const classNameOuter = !cartOpen ? "cart-go-in-left " : "";
  const products = cart.map((product) => <CartRow product={product} />);
  let total = 0;
  cart.forEach((product) => {
    total += Number((product.amount * product.price).toFixed(2));
  });
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setCartOpen(!cartOpen);
        }}
        className={`cart-outer ${classNameOuter}`}
      ></div>
      <div className={`cart ${classNameCart}`}>
        <button
          className="cart-close-btn"
          onClick={(e) => {
            e.stopPropagation();
            setCartOpen(!cartOpen);
          }}
        >
          &times;
        </button>
        <div className="product-div">
          {products.length > 0 ? products : "Cart Empty"}
        </div>
        <div>
          <h4>Total: ${total}</h4>
        </div>
      </div>
    </>
  );
}

export default Cart;
