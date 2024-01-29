import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: [],
  defaultId: "default",
  opened: true,
  themeMode: "light",
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    menuOpen: (state, action) => {
      return {
        ...state,
        isOpen: [action.payload],
      };
    },
    setMenu: (state, action) => {
      return {
        ...state,
        opened: action.payload,
      };
    },
    setThemeMode: (state, payload) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
  },
});

export const { setMenu, menuOpen, setThemeMode } = globalSlice.actions;
const globalReducer = globalSlice.reducer;
export default globalReducer;
