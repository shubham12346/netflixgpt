import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  movies: [],
};
const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action?.payload;
    },
    removeMovies: (state, action) => {
      return null;
    },
  },
});

export const { addMovies, removeMovies } = movieSlice?.actions;
export default movieSlice?.reducer;
