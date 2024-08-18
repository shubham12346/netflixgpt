import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: null,
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
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
