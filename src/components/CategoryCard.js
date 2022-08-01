import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category, image }) {
  return (
    <Link className="category-card" to={`/shop/${category}`}>
      <img src={image} alt="" />
      <div className="category-info">
        <h1>{category}</h1>
      </div>
    </Link>
  );
}

export default CategoryCard;
