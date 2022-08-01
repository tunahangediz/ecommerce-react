import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link className="category-card" to={`/shop/${category}`}>
      <h1>{category}</h1>
    </Link>
  );
}

export default CategoryCard;
