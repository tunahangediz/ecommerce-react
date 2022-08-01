import React, { useContext } from "react";
import shoppingContext from "../context/shoppingContex";
import CategoryCard from "./CategoryCard";
import "./styles/category.css";
import mens from "./images/mens.jpg";
import women from "./images/women.jpg";
import jewelery from "./images/jewelery.jpg";
import electronics from "./images/electronics.jpg";
const IMAGES = [mens, jewelery, electronics, women];
function CategoryGrid() {
  const { products, loading } = useContext(shoppingContext);

  /// PRODUCTAKİ UNIQE CATEGORYLERİ ALIR
  // const categories = [...new Set(products.map((item) => item.category))];
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  // if (loading) {
  //   return (
  //     <div className="spinner-wrap">
  //       <div className="spinner">
  //         <ion-icon name="reload-outline"></ion-icon>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="container">
      <div className="category-grid">
        {categories.map((category, index) => (
          <CategoryCard
            key={category}
            category={category}
            image={IMAGES[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;
