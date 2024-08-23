import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  movies: [],
  recommendedMovies: [],
  allMatchedMovie: [],
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
    addRecommendedMoviesFromGemini: (state, action) => {
      state.recommendedMovies = action.payload;
    },
    allSuggestedMovieMatchedWithGeminiSearch: (state, action) => {
      state.allMatchedMovie = action.payload;
    },
  },
});

export const {
  addMovies,
  removeMovies,
  addRecommendedMoviesFromGemini,
  allSuggestedMovieMatchedWithGeminiSearch,
} = movieSlice?.actions;
export default movieSlice?.reducer;
