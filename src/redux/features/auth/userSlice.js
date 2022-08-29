import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://fakestoreapi.com/auth/login";
const urlUser = "https://fakestoreapi.com/users";

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  userInfo: null,
  userToken: userToken,
  status: "idle",
  error: null,
};

export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async (initialState) => {
    const response = await axios.post(baseUrl, initialState);
    return response.data;
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (initialState) => {
    const response = await axios.get(`${urlUser}/${initialState}`);
    return response.data;
  }
);

export const adduser = createAsyncThunk(
  "user/addUser",
  async (initialState) => {
    const response = await axios.post(`${urlUser}`, initialState);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("cartItems");
      state.userInfo = null;
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
      state.error = null;
    },
    [fetchLogin.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
    [adduser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
