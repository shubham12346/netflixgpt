import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_LIST } from "../constant";
import { useEffect } from "react";

const useMovies = () => {
  const dispatch = useDispatch();
  const getMoviesList = async () => {
    try {
      const res = await fetch(MOVIES_LIST, API_OPTIONS);
      const data = await res.json();
      if (data?.results?.length > 0) {
        dispatch({ type: "movies/addMovies", payload: [...data?.results] });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default useMovies;
