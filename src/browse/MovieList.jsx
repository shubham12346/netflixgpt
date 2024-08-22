import React from "react";
import MoviePoster from "./MoviePoster";

const MovieList = ({ MovieList, title }) => {
  return (
    <div>
      <div className="text-white text-xl font-bold">{title}</div>
      <div className="flex flex-row  w-full overflow-auto my-2">
        {MovieList?.map((item) => (
          <MoviePoster key={item?.poster_path} imagePath={item?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
