import React from "react";
import NetFlixLogo from "../../assesst/Netflix_Logo_PMS.png";
const NetflixLogo = ({ className }) => {
  return (
    <img
      src={NetFlixLogo}
      alt="netflix-logo"
      className={`${className === "" ? "h-28" : className}`}
    />
  );
};

export default NetflixLogo;
