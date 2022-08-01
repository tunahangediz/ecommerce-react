import React, { useContext, useState } from "react";
import shoppingContext from "../context/shoppingContex";
import useFetch from "../Hooks/useFetch";
import CategoryGrid from "./CategoryGrid";
import Navbar from "./Navbar";

function Home() {
  //   const [products, setProducts] = useState([]);
  const { products, loading } = useContext(shoppingContext);
  products.forEach((p) => console.log(p.category));

  return (
    <div className="home">
      <CategoryGrid />
    </div>
  );
}

export default Home;
