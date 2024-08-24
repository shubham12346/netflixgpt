import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const RecommendedSuggestions = () => {
  const recommendedMovies = useSelector(
    (state) => state.movies.recommendedMovies
  );
  const { t } = useTranslation("login");
  return (
    <div className="text-white py-4 ">
      <div className="text-3xl font-bold ">{t("suggestedMovies")}</div>
      <div className=" md:flex  overflow-x-hidden">
        {recommendedMovies?.map((movie, index) => (
          <div
            key={`${index}-${movie}`}
            className="text-2xl py-3  text-white mr-2"
          >
            {movie}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSuggestions;
