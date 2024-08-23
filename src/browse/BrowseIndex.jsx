import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import useMovies from "./hooks/useMovies";
import useMovieId from "./hooks/useMovieId";
import PlayButton from "./PlayButton";
import BackgroundPlay from "./BackgroundPlay";
import MovieSuggestion from "./MovieSuggestion";
import SearchIndex from "./SearchIndex";

const BrowseIndex = () => {
  const movies = useSelector((state) => state.movies.movies);
  const tab = useSelector((state) => state.tabs.movieTab);
  useMovies();
  const { trailer } = useMovieId(movies[0]?.id);
  if (!movies) {
    return;
  }
  return (
    <div className="relative">
      <div className="absolute z-10 opacity-85 top-0 w-full">
        <Header />
      </div>
      {tab ? (
        <>
          <div className="absolute bg-gray- w-1/3 h-48 top-[7%] left-20">
            <PlayButton
              imageSrc={movies[0]?.poster_path}
              description={movies[0]?.overview}
            />
          </div>
          <BackgroundPlay trailer={trailer} />
          <MovieSuggestion movies={movies} />
        </>
      ) : (
        <SearchIndex />
      )}
    </div>
  );
};

export default BrowseIndex;
