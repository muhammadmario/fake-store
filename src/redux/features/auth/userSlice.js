import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://fakestoreapi.com/auth/login";

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  userToken: userToken,
  status: "idle",
  error: null,
};

export const fetchLogin = createAsyncThunk(
  "product/fetchLogin",
  async (initialState) => {
    const response = await axios.post(baseUrl, initialState);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.userToken = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.status = "loading";
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.userToken = action.payload.token;
      state.error = "";
    },
    [fetchLogin.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
