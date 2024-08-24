import React from "react";

const BackgroundComponent = () => {
  const url = `https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg`;
  return (
    <img
      src={url}
      alt="netflix background"
      className="w-[100vw] h-[100vh] object-cover"
    />
  );
};

export default BackgroundComponent;
