import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { chatSession } from "./GeminiAI";
import { useDispatch } from "react-redux";
import { queryEnd, queryStart } from "./constant";
import AIRecommendedMovie from "./AIRecommendedMovie";
const SearchIndex = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation("login");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const findSearchedMovies = async () => {
    const query = `${queryStart}${searchText} ${queryEnd}`;
    const res = await chatSession.sendMessage(query);
    console.log(res.response?.text());
    const results = res.response?.text();
    const ans = results.split(","); // Split by a comma or another delimiter

    console.log("ans", ans);

    dispatch({
      type: "movies/addRecommendedMoviesFromGemini",
      payload: results,
    });
    console.log("query:", query);
  };

  return (
    <div className="relative">
      <div className="pt-24 flex justify-center items-center ">
        <div className="flex p-3 bg-black w-2/6">
          <input
            type="text"
            onChange={handleChange}
            className="border-2 border-white py-3 px-6 text-lg font-semibold mr-10 w-4/5"
            value={searchText}
          />
          <div>
            <button
              className=" text-white text-2xl py-3 px-6 bg-red-600 rounded hover:bg-red-900"
              type="button"
              onClick={findSearchedMovies}
            >
              {t("search")}
            </button>
          </div>
        </div>
      </div>
      <div>
        <AIRecommendedMovie />
      </div>
    </div>
  );
};

export default SearchIndex;
