import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  currentTab: "",
};
const tabsSlice = createSlice({
  name: "tabs",
  initialState: initialState,
  reducers: {
    changeTab: (state, action) => {
      state.movies = action?.payload;
    },
  },
});

export const { changeTab } = tabsSlice?.actions;
export default tabsSlice?.reducer;
