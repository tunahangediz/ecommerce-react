import React, { useContext } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import shoppingContext from "../../context/shoppingContex";
import "../styles/categoryNav.css";
import "../styles/shop.css";
function ShopLayout() {
  const { products, categories, loading } = useContext(shoppingContext);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const links = document.querySelectorAll("a");
  //   links.forEach((el) => el.clasList.remove("link-active"));
  //   e.target.clasList.add("link-active");
  // };
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
    <>
      <div className="category-nav">
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active link" : "link"
            }
            to={`/shop/${category}`}
            key={category}
          >
            {category}
          </NavLink>
        ))}
      </div>
      <div className="shop-content">
        {loading && (
          <div className="spinner-wrap">
            <div className="spinner">
              <ion-icon name="reload-outline"></ion-icon>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
}

export default ShopLayout;
