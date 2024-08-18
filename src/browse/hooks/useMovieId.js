import { useEffect, useState } from "react";
import { API_OPTIONS, VIDEO_LIST, VIDEO_TYPE } from "../constant";

const useMovieId = (movieId) => {
  const [trailer, setTrailer] = useState("");
  const fetchMovieVideos = async (movieId) => {
    const res = await fetch(VIDEO_LIST, API_OPTIONS);
    const data = await res.json();
    console.log("data", data);
    const trailers = data?.results.filter(
      (movieVideo) => movieVideo?.type === VIDEO_TYPE
    );
    console.log("trailers", trailers);
    setTrailer(trailers[0]?.key);
  };

  useEffect(() => {
    fetchMovieVideos();
  }, [movieId]);

  return { trailer };
};

export default useMovieId;
