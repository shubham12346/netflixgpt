import React from "react";
import NetflixLogo from "../common/component/NetflixLogo";
import { signOut } from "firebase/auth";
import { auth } from "../auth/util";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../store/slices/tabs";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("login");
  const tab = useSelector((state) => state.tabs.movieTab);
  const language = useSelector((state) => state.user.language);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  const handleTabChange = () => {
    dispatch(changeTab(!tab));
  };

  const languages = ["English", "Spanish", "Nepali", "Hindi"];

  const handleSelect = (e) => {
    const selectedLanguage = e.target.value.toLowerCase();
    dispatch({
      type: "user/userLanguage",
      payload: selectedLanguage,
    });

    // Update i18next language
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="flex flex-col pb-10 md:flex-row justify-between align-middle items-center px-20 bg-black bg-gradient-to-br ">
      <div className="">
        <NetflixLogo className={"h-20"} />
      </div>
      <div className="flex text-2xl cursor-pointer mr-2 ">
        <div className="flex bg-red-700 p-3">
          <label className=" text-black mr-2">{t("language")}</label>
          <select onChange={handleSelect} value={language}>
            {languages?.map((item, index) => (
              <option
                key={`${index}-${item}`}
                value={item?.toLowerCase()}
                className="z-50"
              >
                <div>{item}</div>
              </option>
            ))}
          </select>
        </div>
        <div
          className="px-2 py-2 rounded w-[250px] text-nowrap  bg-red-700  mx-10 hover:bg-red-500"
          onClick={handleTabChange}
        >
          {tab ? t("gptSearch") : t("homepage")}
        </div>
        <div
          className="px-2 cursor-pointer py-2 text-white"
          onClick={handleLogout}
        >
          {t("logout")}
        </div>
      </div>
    </div>
  );
};

export default Header;
