import React from "react";
import Product from "./Product";
import "../styles/product.css";

function ProductLayout({ products }) {
  return (
    <div className="product-layout">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductLayout;
