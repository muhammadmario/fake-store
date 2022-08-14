import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarValue: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.sidebarValue = !state.sidebarValue;
    },
  },
});

export const getSidebarValue = (state) => state.navbar.sidebarValue;

export const { toggleSidebar } = navbarSlice.actions;

export default navbarSlice.reducer;
