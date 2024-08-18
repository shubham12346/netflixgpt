import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import useMovies from "./hooks/useMovies";
import useMovieId from "./hooks/useMovieId";

const BrowseIndex = () => {
  const movies = useSelector((state) => state.movies);

  useMovies();
  const { trailer } = useMovieId(movies[0]?.id);
  console.log("trailer", trailer);
  return (
    <div>
      <Header />

      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;   
 web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default BrowseIndex;
