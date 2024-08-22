import React from "react";

const BackgroundPlay = ({ trailer }) => {
  return (
    <div className="">
      <div className="w-[100%]">
        <iframe
          className=" overflow-hidden w-[100%] h-screen object-contain"
          src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1`}
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
 web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default BackgroundPlay;
