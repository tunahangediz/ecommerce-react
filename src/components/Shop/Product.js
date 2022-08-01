import React, { useContext } from "react";
import { Link } from "react-router-dom";
import shoppingContext from "../../context/shoppingContex";

function Product({ product }) {
  const { addProductToCart } = useContext(shoppingContext);
  const handleClick = (e) => {
    e.preventDefault();
    addProductToCart(product);
  };
  return (
    // <Link to="/">
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt="" />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
    // </Link>
  );
}

export default Product;
