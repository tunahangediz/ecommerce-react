import React, { useContext } from "react";
import shoppingContext from "../../context/shoppingContex";
import ProductLayout from "./ProductLayout";

function Shop() {
  const { products } = useContext(shoppingContext);
  return (
    <div>
      <ProductLayout products={products} />
    </div>
  );
}

export default Shop;
