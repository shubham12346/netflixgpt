import React from "react";
import NetflixLogo from "../common/component/NetflixLogo";
import { signOut } from "firebase/auth";
import { auth } from "../auth/util";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../store/slices/tabs";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tab = useSelector((state) => state.tabs.movieTab);
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  const handleTabChange = () => {
    dispatch(changeTab(!tab));
  };
  return (
    <div className="flex flex-col pb-10 md:flex-row justify-between align-middle items-center px-20 bg-black bg-gradient-to-br ">
      <div className="">
        <NetflixLogo className={"h-20"} />
      </div>
      <div className="flex text-white text-2xl cursor-pointer ">
        <div
          className="px-2 py-2 rounded w-[100%] text-nowrap bg-red-700  mx-10 hover:bg-red-500"
          onClick={handleTabChange}
        >
          {tab ? "GPT search" : "Homepage"}
        </div>
        <div className="px-2 cursor-pointer py-2" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
