import { useEffect, useState } from "react";
import {
  API_OPTIONS,
  VIDEO_LIST,
  VIDEO_LIST_END,
  VIDEO_TYPE,
} from "../constant";

const useMovieId = (movieId) => {
  const [trailer, setTrailer] = useState("");
  const fetchMovieVideos = async (movieId) => {
    if (movieId) {
      const res = await fetch(
        `${VIDEO_LIST}${movieId}${VIDEO_LIST_END}`,
        API_OPTIONS
      );
      const data = await res.json();
      const trailers = data?.results?.filter(
        (movieVideo) => movieVideo?.type === VIDEO_TYPE
      );
      if (trailers) {
        setTrailer(trailers[0]?.key);
      }
    }
  };

  useEffect(() => {
    fetchMovieVideos(movieId);
  }, [movieId]);

  return { trailer };
};

export default useMovieId;
