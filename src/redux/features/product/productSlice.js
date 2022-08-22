import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://fakestoreapi.com/products";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (initialState) => {
    const response = await axios.get(`${baseUrl}${initialState}`);
    return response.data;
  }
);

// export const fetchProductsByCategory

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState({
    status: "idle",
    error: null,
    sort: "",
    sortCategory: "",
  }),
  reducers: {
    sortProduct: (state, action) => {
      state.sort = action.payload;
    },
    sortProductByCategory: (state, action) => {
      state.sortCategory = action.payload;
    },
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      productEntity.setAll(state, action.payload);
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const productSelector = productEntity.getSelectors(
  (state) => state.product
);

// export const selectAllProduct = (state) => state.product.product;
export const getProductStatus = (state) => state.product.status;
export const getSortStatus = (state) => state.product.sort;
export const getSortCategoryStatus = (state) => state.product.sortCategory;
// export const selectBlogById = (state, productId) =>
//   state.product.product.find((product) => product.id === productId);

export const { sortProduct, sortProductByCategory } = productSlice.actions;

export default productSlice.reducer;
