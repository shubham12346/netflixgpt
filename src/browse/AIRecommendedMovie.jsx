import React from "react";
import { useSelector } from "react-redux";
import useAIToShowMovie from "./hooks/useAIToShowMovie";

const AIRecommendedMovie = () => {
  const { recommendedMovies, allMatchedMovie } = useSelector(
    (state) => state.movies
  );
  useAIToShowMovie(recommendedMovies);
  console.log("allMatchedMovie", allMatchedMovie);
  return <div>AIRecommendedMovie</div>;
};

export default AIRecommendedMovie;
