import { useDispatch } from "react-redux";
import { searchURl } from "../constant";
import { useEffect } from "react";

const useAIToShowMovie = (movies) => {
  const dispatch = useDispatch();
  console.log("movies", movies);

  const searchTheMoviesRelated = (movieName) => {
    const res = fetch(`${searchURl}${movieName}`);
    return res;
  };

  const searchAll = async (movies) => {
    console.log("movies mapping", movies);
    const allMovies = movies.map((movieName) => {
      console.log("movies name", movieName);
      return movieName;
    });
    console.log("allMovies", allMovies);
    const res = await Promise.all(allMovies);
    console.log("res", res);
    dispatch({
      type: "movies/allSuggestedMovieMatchedWithGeminiSearch",
      payload: res,
    });
  };

  useEffect(() => {
    if (movies.length > 0) {
      //   searchAll(movies);
    }
  }, [movies]);
};

export default useAIToShowMovie;
