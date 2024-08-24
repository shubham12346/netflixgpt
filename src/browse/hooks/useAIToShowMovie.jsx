import { useDispatch } from "react-redux";
import { API_OPTIONS, searchURl } from "../constant";
import { useEffect } from "react";

const useAIToShowMovie = (movies) => {
  const dispatch = useDispatch();
  console.log("movies", movies);

  const searchTheMoviesRelated = async (movieName) => {
    try {
      const res = await fetch(`${searchURl}${movieName}`, API_OPTIONS);
      const data = await res.json(); // Await the JSON parsing
      console.log("data?.results", data.results); // Log the actual results
      return data.results; // Return the results
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return undefined; // Handle errors gracefully
    }
  };

  const searchAll = async (movies) => {
    const allMovies = movies.map((movieName) =>
      searchTheMoviesRelated(movieName)
    );
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
      searchAll(movies);
    }
  }, [movies]);
};

export default useAIToShowMovie;
