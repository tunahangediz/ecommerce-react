import React, { useContext } from "react";
import shoppingContext from "../context/shoppingContex";
import CategoryCard from "./CategoryCard";
import "./styles/category.css";

function CategoryGrid() {
  const { products } = useContext(shoppingContext);
  let lastCategory = "";

  const categories = [...new Set(products.map((item) => item.category))];
  //   const categories = products.map((product) => {
  //     if (lastCategory !== product.category) {
  //       lastCategory = product.category;
  //       return product.category;
  //     }
  //   });
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <CategoryCard key={category} category={category} />
      ))}
    </div>
  );
}

export default CategoryGrid;
