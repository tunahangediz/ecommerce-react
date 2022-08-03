import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import shoppingContext from "../../context/shoppingContex";
import "./productDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const {
    products,
    cart,
    loading,
    decrementProduct,
    deleteProduct,
    incrementProduct,
    addProductToCart,
  } = useContext(shoppingContext);
  console.log(id);

  const product = products.filter((p) => p.id === +id);
  const productInCart = cart.filter((p) => p.id === +id);
  const handleDecrement = () => {
    if (productInCart.length) {
      if (productInCart[0].amount > 1) {
        decrementProduct(productInCart[0]);
      } else {
        deleteProduct(productInCart[0]);
      }
    } else {
      alert("you need to add product to cart");
    }
  };
  const handleIncrement = () => {
    addProductToCart(product[0]);
    // incrementProduct(product[0]);
  };
  if (loading) {
    return (
      <div className="spinner-wrap">
        <div className="spinner">
          <ion-icon name="reload-outline"></ion-icon>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="product-details">
        <div className="product-image-div">
          <img src={product[0].image} alt="" />
        </div>
        <div className="product-content">
          <h1>{product[0].title}</h1>
          <p>{product[0].description}</p>
          <h4 className="price">${product[0].price}</h4>
          <div>
            <button onClick={handleDecrement} className="btn-details">
              -
            </button>
            <p style={{ margin: "0 1rem", display: "inline" }}>
              {productInCart.length ? productInCart[0].amount : 0}
            </p>

            <button onClick={handleIncrement} className="btn-details">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
