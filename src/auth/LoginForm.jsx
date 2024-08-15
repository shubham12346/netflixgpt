import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation("login");
  const [isSignUpForm, setIsSignUpForm] = useState(false);

  const name = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const handleSubmit = (e) => {
    setIsSignUpForm(true);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="h-80 flex flex-col p-5">
          <div className="text-white">
            {isSignUpForm ? t("singUp") : t("singIn")}
          </div>
          {isSignUpForm && (
            <input
              type="text"
              name="email"
              className="p-2 mx-2 my-2"
              ref={name}
            />
          )}
          <input
            type="email"
            name="email"
            className="p-2 mx-2 my-2"
            ref={email}
          />
          <input
            type="password"
            name="password"
            id=""
            className="p-2 mx-2 my-2"
            ref={password}
          />

          <button className="bg-red-600 text-white p-2 mx-2 my-2">
            {isSignUpForm ? t("singUp") : t("singIn")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
