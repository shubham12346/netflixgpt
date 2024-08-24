import React from "react";
import BackgroundComponent from "../common/component/BackgroundComponent";
import NetflixLogo from "../common/component/NetflixLogo";
import LoginForm from "./LoginForm";

const LoginIndex = () => {
  return (
    <div className="relative bg-black">
      <div className="absolute  bg-dark bg-gradient-to-b ">
        <BackgroundComponent />
      </div>

      <div className="absolute   w-full flex justify-center items-center">
        <NetflixLogo className="h-12 md:h-24 " />
      </div>
      <div className=" w-full md:w-1/2 lg:w-3/12 bg-black opacity-85 absolute mt-24  left-1/2 transform -translate-x-1/2 ">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginIndex;
