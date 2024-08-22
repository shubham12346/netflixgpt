import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import useMovies from "./hooks/useMovies";
import useMovieId from "./hooks/useMovieId";
import PlayButton from "./PlayButton";
import BackgroundPlay from "./BackgroundPlay";
import MovieSuggestion from "./MovieSuggestion";

const BrowseIndex = () => {
  const movies = useSelector((state) => state.movies.movies);
  useMovies();
  const { trailer } = useMovieId(movies[0]?.id);

  console.log("movies items", movies);
  if (!movies) {
    return;
  }
  return (
    <div className="relative">
      <Header />
      <div className="absolute bg-gray- w-1/3 h-48 top-[7%] left-20">
        <PlayButton
          imageSrc={movies[0]?.poster_path}
          description={movies[0]?.overview}
        />
      </div>
      <BackgroundPlay trailer={trailer} />
      <MovieSuggestion movies={movies} />
    </div>
  );
};

export default BrowseIndex;
