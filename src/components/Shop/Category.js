import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import shoppingContext from "../../context/shoppingContex";
import ProductLayout from "./ProductLayout";

function Category() {
  const { products } = useContext(shoppingContext);
  const { category } = useParams();
  // console.log(products);
  const filteredCategoryItems = products.filter(
    (product) => product.category == category
  );
  return (
    <div>
      <h1>{category}</h1>
      <div>
        <ProductLayout products={filteredCategoryItems} />
      </div>
    </div>
  );
}

export default Category;
