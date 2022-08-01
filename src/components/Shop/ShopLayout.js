import React, { useContext } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import shoppingContext from "../../context/shoppingContex";

function ShopLayout() {
  const { products, categories } = useContext(shoppingContext);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const links = document.querySelectorAll("a");
  //   links.forEach((el) => el.clasList.remove("link-active"));
  //   e.target.clasList.add("link-active");
  // };
  return (
    <div>
      <div>
        {categories.map((category) => (
          <NavLink
            // className={({ isActive }) => (isActive ? "link-active" : "")}
            // style={({ isActive }) => ({
            //   backgroundColor: isActive ? "red" : "transparent",
            // })}
            // onClick={handleClick}
            to={`/shop/${category}`}
            key={category}
          >
            {category}
          </NavLink>
        ))}
      </div>
      <div>Shop</div>
      <Outlet />
    </div>
  );
}

export default ShopLayout;
