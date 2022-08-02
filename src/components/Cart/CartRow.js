import React, { useContext } from "react";
import shoppingContext from "../../context/shoppingContex";

function CartRow({ product }) {
  const { incrementProduct, decrementProduct, deleteProduct } =
    useContext(shoppingContext);

  const handleIncrement = () => {
    incrementProduct(product);
  };
  const handleDecrement = () => {
    if (product.amount > 1) {
      decrementProduct(product);
    } else {
      deleteProduct(product);
    }
  };

  const price = (product.amount * product.price).toFixed(2);
  return (
    <div className="cart-row">
      <img src={product.image} alt="" />
      <div className="row-info">
        <div className="row-title">{product.title}</div>
        <div>${price}</div>
        <div className="cart-row-count">
          <button onClick={handleDecrement}>-</button>
          <div>{product.amount}</div>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartRow;
