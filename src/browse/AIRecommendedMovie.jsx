import React from "react";
import { useSelector } from "react-redux";
import useAIToShowMovie from "./hooks/useAIToShowMovie";
import MovieList from "./MovieList";

const AIRecommendedMovie = () => {
  const { recommendedMovies, allMatchedMovie } = useSelector(
    (state) => state.movies
  );
  useAIToShowMovie(recommendedMovies);
  console.log("allMatchedMovie", allMatchedMovie);
  return (
    <div className="p-10">
      {recommendedMovies?.map((movieName, index) => (
        <div key={movieName} className="m-5">
          <MovieList title={movieName} MovieList={allMatchedMovie[index]} />
        </div>
      ))}
    </div>
  );
};

export default AIRecommendedMovie;
