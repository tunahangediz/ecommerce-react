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
  return (
    <div style={{ display: "flex" }}>
      <img
        style={{ maxWidth: "100px", width: "100%" }}
        src={product.image}
        alt=""
      />
      <div>
        <button onClick={handleDecrement}>-</button>
        <div>{product.amount}</div>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default CartRow;
