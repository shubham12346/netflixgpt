import React from "react";
import { useSelector } from "react-redux";

const BrowseIndex = () => {
  const user = useSelector((state) => state.user);

  if (user?.email) {
    console.log(user);
  }
  return <div>BrowseIndex</div>;
};

export default BrowseIndex;
