import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import movieReducer from "./slices/movies";
import tabReducer from "./slices/tabs";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    tabs: tabReducer,
  },
});

export default store;
