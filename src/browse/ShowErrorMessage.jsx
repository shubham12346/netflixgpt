import React from "react";

const ShowErrorMessage = ({ errorMessage }) => {
  if (!errorMessage) return;
  return (
    <div className="font-semibold text-red-700 text-sm md:text-xl ml-10 py-5">
      {errorMessage}
    </div>
  );
};

export default ShowErrorMessage;
