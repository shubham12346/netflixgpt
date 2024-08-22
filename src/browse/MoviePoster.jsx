import React from "react";
import { IMAGE_PATH } from "./constant";
const MoviePoster = ({ imagePath, movieDetail }) => {
  return (
    <div className="w-full">
      <img
        src={`${IMAGE_PATH}${imagePath}`}
        alt=""
        className="w-96 h-64 m-2 p-2"
        srcset=""
      />
    </div>
  );
};

export default MoviePoster;
