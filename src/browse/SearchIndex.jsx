import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { chatSession } from "./GeminiAI";
import { useDispatch, useSelector } from "react-redux";
import { queryEnd, queryStart } from "./constant";
import AIRecommendedMovie from "./AIRecommendedMovie";
import RecommendedSuggestions from "./RecommendedSuggestions";
import ShowErrorMessage from "./ShowErrorMessage";
const SearchIndex = () => {
  const errorMessage = useSelector((state) => state.movies.errorMessage);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation("login");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const findSearchedMovies = async () => {
    const query = `${queryStart}${searchText} ${queryEnd}`;
    try {
      const res = await chatSession.sendMessage(query);
      console.log(res.response?.text());
      const result = res.response.text();
      const result1 = JSON.parse(result);
      dispatch({
        type: "movies/addRecommendedMoviesFromGemini",
        payload: result1,
      });
      setErrorMessage("");
    } catch (error) {
      console.error(error.message);
      setErrorMessage(error.message);
    }

    console.log("query:", query);
  };

  const setErrorMessage = (msg) => {
    dispatch({
      type: "movies/setErrorMessage",
      payload: msg,
    });
  };
  return (
    <div className="relative">
      <div className="pt-36 md:pt-24   flex sm:flex-col md:flex-row justify-center items-center bg-black w-screen ">
        <div className="   flex flex-col md:flex-row  p-3 bg-black w-full  md:w-3/6">
          <input
            type="text"
            onChange={handleChange}
            className="mt-5 border-2 border-white py-3 px-6 text-lg font-semibold mr-10 w-full md:w-5/6 bg-slate-700 text-white my-2"
            value={searchText}
            placeholder={t("searchPlaceholder")}
          />
          <div className="">
            <button
              className="mt-5  text-white text-2xl py-3 px-6 bg-red-600 rounded hover:bg-red-900"
              type="button"
              onClick={findSearchedMovies}
            >
              {t("searchBtn")}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <ShowErrorMessage errorMessage={errorMessage} />
      </div>
      <div className="bg-black pt-10 pl-16">
        <RecommendedSuggestions />
      </div>
      <div className="bg-black   pb-20">
        <AIRecommendedMovie />
      </div>
    </div>
  );
};

export default SearchIndex;
