import React from "react";
import { ADD_CART, SET_PRODUCTS } from "./types";
function shoppingReducer(state, action) {
  switch (action.type) {
    case ADD_CART:
      return { ...state, cart: action.payload };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
  }
}

export default shoppingReducer;
