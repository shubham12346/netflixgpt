import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import useMovies from "./hooks/useMovies";
import useMovieId from "./hooks/useMovieId";
import PlayButton from "./PlayButton";

const BrowseIndex = () => {
  const movies = useSelector((state) => state.movies);

  useMovies();
  const { trailer } = useMovieId(movies[0]?.id);
  return (
    <div className="">
      <Header />
      <div className="w-[100%]">
        <iframe
          className=" overflow-hidden w-[100%] h-screen  absolute"
          src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1`}
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
 web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="absolute bg-gray-700 w-1/3 h-48 top-[50%] left-20">
        <PlayButton />
      </div>
    </div>
  );
};

export default BrowseIndex;
