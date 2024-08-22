import React from "react";
import MovieList from "./MovieList";

const MovieSuggestion = ({ movies }) => {
  return (
    <div className="bg-black">
      <div className="-mt-28">
        <MovieList MovieList={movies} title={"Now Playing"} />
      </div>

      <MovieList MovieList={movies} title={"Favorites"} />

      <MovieList MovieList={movies} title={"Must watch"} />

      <MovieList MovieList={movies} title={"Upcoming"} />
    </div>
  );
};

export default MovieSuggestion;
