import React from "react";
import { IMAGE_PATH } from "./constant";
const MoviePoster = ({ imagePath, movieDetail }) => {
  if (!imagePath) return;
  return (
    <div className="min-w-[240px] max-w-[240px]">
      <img
        src={`${IMAGE_PATH}${imagePath}`}
        alt=""
        className="w-full h-64 object-cover m-2 p-2 border-r-2  border-white mx-2"
        srcset=""
      />
    </div>
  );
};

export default MoviePoster;
