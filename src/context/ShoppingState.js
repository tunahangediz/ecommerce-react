import React, { useEffect, useReducer, useState } from "react";
import shoppingContext from "./shoppingContex";
import shoppingReducer from "./shoppingReducer";
import { ADD_CART, SET_PRODUCTS } from "./types";

function ShoppingState({ children }) {
  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(shoppingReducer, initialState);
  const categories = [...new Set(state.products.map((item) => item.category))];
  const [cartOpen, setCartOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const getProducts = (api) => {
    fetch(api, { mode: "cors" })
      .then((response) => {
        // Hata verirse uygulamanın çökmemesi için response kontorlü yapılmalı
        setLoading(true);
        if (!response.ok) {
          throw Error("Data not fetched");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: SET_PRODUCTS, payload: data });
        // dispatch({ type: SET_LOADING, payload: false });
        setLoading(false);
      })
      .catch((err) => {
        // dispatch({ type: SET_LOADING, payload: true });
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts("https://fakestoreapi.com/products");
  }, []);

  const addProductToCart = (product) => {
    const checkCart = state.cart.find((el) => el.id === product.id);

    if (checkCart) {
      const newCart = state.cart.map((item) => {
        if (item.id === product.id) {
          return { ...product, amount: item.amount + 1 };
        }
        return item;
      });
      dispatch({ type: ADD_CART, payload: newCart });
    } else {
      const newCart = [...state.cart];
      newCart.push({ ...product, amount: 1 });
      dispatch({ type: ADD_CART, payload: newCart });
    }
  };
  console.log(state.cart);
  const incrementProduct = (product) => {
    const newCart = state.cart.map((item) => {
      if (item.id === product.id) {
        return { ...product, amount: item.amount + 1 };
      }
      return item;
    });
    dispatch({ type: ADD_CART, payload: newCart });
  };
  const decrementProduct = (product) => {
    const newCart = state.cart.map((item) => {
      if (item.id === product.id && product.amount > 1) {
        return { ...product, amount: item.amount - 1 };
      }
      return item;
    });
    dispatch({ type: ADD_CART, payload: newCart });
  };

  const deleteProduct = (product) => {
    const newCart = state.cart.filter((item) => item.id !== product.id);
    dispatch({ type: ADD_CART, payload: newCart });
  };

  return (
    <shoppingContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        loading: loading,
        categories: categories,
        addProductToCart,
        cartOpen,
        setCartOpen,
        incrementProduct,
        decrementProduct,
        deleteProduct,
      }}
    >
      {children}
    </shoppingContext.Provider>
  );
}

export default ShoppingState;
