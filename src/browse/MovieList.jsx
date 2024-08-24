import React from "react";
import MoviePoster from "./MoviePoster";

const MovieList = ({ MovieList, title }) => {
  return (
    <div>
      <div className="text-white text-xl font-bold">{title}</div>
      <div className="flex flex-row  w-full overflow-auto my-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300">
        {MovieList?.map((item) => (
          <div key={item?.poster_path} className="mx-2">
            <MoviePoster imagePath={item?.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
