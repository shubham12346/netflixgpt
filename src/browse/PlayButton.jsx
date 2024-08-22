import React from "react";
import { IMAGE_PATH } from "./constant";
const PlayButton = ({ imageSrc, description }) => {
  return (
    <div className="bg-gradient-to-r from-black w-3/4 h-fit p-5">
      <div>
        <img
          src={`${IMAGE_PATH}${imageSrc}`}
          className="w-32"
          alt=""
          srcset=""
        />
      </div>
      <div className="text-white p-5 text-sm">{description}</div>
      <div className="flex text-white text-xl">
        <button className="mx-2 py-1 px-3 rounded border-2 bg-white text-black hover:bg-gray-300">
          ▶️ Play
        </button>
        <button className="mx-2 py-1 px-3 rounded border-2 bg-white text-black hover:bg-gray-300">
          More info
        </button>
      </div>
    </div>
  );
};

export default PlayButton;
