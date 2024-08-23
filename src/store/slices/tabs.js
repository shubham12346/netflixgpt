import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  movieTab: true,
};
const tabsSlice = createSlice({
  name: "tabs",
  initialState: initialState,
  reducers: {
    changeTab: (state, action) => {
      state.movieTab = action.payload;
    },
  },
});

export const { changeTab } = tabsSlice.actions;
export default tabsSlice.reducer;
