import { useEffect, useState } from "react";
import { IMAGE_URL, IMAGE_URL_END, IMAGE_PATH } from "../constant";
const useMoviePoster = (movieId) => {
  console.log("movieIdmovieId", movieId);
  const [path, setPath] = useState("");

  const fetchMoviePoster = async () => {
    if (movieId) {
      console.log("movieId", movieId);
      const res = await fetch(`${IMAGE_URL}533535${IMAGE_URL_END}`);
      const data = await res.json();
      setPath(`${IMAGE_PATH}${data?.results[0].path}`);
    }
  };

  useEffect(() => {
    fetchMoviePoster();
  }, []);

  return { path };
};

export default useMoviePoster;
