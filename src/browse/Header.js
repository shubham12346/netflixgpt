import React from "react";
import NetflixLogo from "../common/component/NetflixLogo";

const Header = () => {
  return (
    <div className="flex justify-between align-middle items-center px-20 bg-black opacity-85">
      <div className="">
        <NetflixLogo className={"h-20"} />
      </div>
      <div className="flex text-white text-2xl">
        <div className="px-2">Shubham</div>
        <div className="px-2">Logout</div>
      </div>
    </div>
  );
};

export default Header;
