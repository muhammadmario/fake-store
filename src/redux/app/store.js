import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import productReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    product: productReducer,
  },
});
