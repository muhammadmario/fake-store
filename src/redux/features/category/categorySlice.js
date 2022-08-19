import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://fakestoreapi.com/products/categories";

const initialState = {
  category: [],
  status: "idle",
  error: null,
};

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  }
);

// const categoryEntity = createEntityAdapter({
//   selectId: (category) => category.id,
// });

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCategory.pending]: (state) => {
      state.status = "loading";
    },
    [getAllCategory.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.category = action.payload;
    },
    [getAllCategory.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

// export const categorySelector = categoryEntity.getSelectors(
//   (state) => state.category
// );

export const selectAllCategory = (state) => state.category.category;

export const {} = categorySlice.actions;

export default categorySlice.reducer;
