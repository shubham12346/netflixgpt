import React from "react";

const PlayButton = () => {
  return (
    <div className="bg-gradient-to-b from-black ">
      <div> Movie detail </div>
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
