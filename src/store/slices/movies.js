import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  movies: [],
  recommendedMovies: [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Inception",
  ],
  allMatchedMovie: [],
  errorMessage: "",
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
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    removeErrorMessage: (state) => {
      state.errorMessage = "";
    },
  },
});

export const {
  addMovies,
  removeMovies,
  addRecommendedMoviesFromGemini,
  allSuggestedMovieMatchedWithGeminiSearch,
  setErrorMessage,
  removeErrorMessage,
} = movieSlice?.actions;
export default movieSlice?.reducer;
