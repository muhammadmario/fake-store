import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://fakestoreapi.com/products";
const initialState = {
  product: [],
  status: "idle",
  error: null,
};

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const selectAllProduct = (state) => state.product.product;
export const getProductStatus = (state) => state.product.status;

export const {} = productSlice.actions;

export default productSlice.reducer;
