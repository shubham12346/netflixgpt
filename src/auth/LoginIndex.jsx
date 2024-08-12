import React from "react";
import BackgroundComponent from "../common/component/BackgroundComponent";
import NetflixLogo from "../common/component/NetflixLogo";
import LoginForm from "./LoginForm";

const LoginIndex = () => {
  return (
    <div className="relative">
      <div className="absolute  bg-dark bg-gradient-to-b ">
        <BackgroundComponent />
      </div>

      <div className="absolute h-36">
        <NetflixLogo />
      </div>
      <div className=" md:w-1/2 lg:w-3/12 bg-black opacity-85 absolute mt-36  left-1/2 transform -translate-x-1/2 ">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginIndex;
