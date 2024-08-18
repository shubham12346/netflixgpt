import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import movieReducer from "./slices/movies";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default store;
