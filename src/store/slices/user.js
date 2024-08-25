import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: null,
  language: "english",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("action payload", action?.payload);
      state.user = action?.payload;
    },

    removeUser: (state) => {
      return null;
    },
    userLanguage: (state, action) => {
      state.language = action.payload;
      console.log("action.payload", action.payload);
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { addUser, removeUser, userLanguage } = userSlice.actions;
export default userSlice.reducer;
