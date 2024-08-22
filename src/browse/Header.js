import React from "react";
import NetflixLogo from "../common/component/NetflixLogo";
import { signOut } from "firebase/auth";
import { auth } from "../auth/util";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className=" absolute flex justify-between align-middle items-center px-20 bg-black bg-gradient-to-br p-10z-10 opacity-85 top-0 w-full">
      <div className="">
        <NetflixLogo className={"h-20"} />
      </div>
      <div className="flex text-white text-2xl">
        <div className="px-2">Shubham</div>
        <div className="px-2 cursor-pointer" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
