import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./login.css";

const LoginForm = () => {
  const { t } = useTranslation("login");
  const [isSignUpForm, setIsSignUpForm] = useState(false);

  const name = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSignUpForm(true);
  };

  const handleFormChange = () => {
    setIsSignUpForm((prev) => !prev);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="md:h-[75vh] flex flex-col p-5 text-white">
          <div className="text-white py-4">
            {isSignUpForm ? t("signUp") : t("signIn")}
          </div>

          <div className={`mx-2 ${isSignUpForm ? "" : "hidden"}`}>
            <label htmlFor="username">{t("username")}</label>
            <input
              type="text"
              name="username"
              className="p-2 my-2 bg-black opacity-70 border-2 border-white  w-full"
              placeholder="Enter your name"
              ref={name}
              autoComplete="off"
              autoFocus
            />
          </div>
          <div className="mx-2">
            <label htmlFor="email">{t("email")}</label>
            <input
              type="email"
              name="email"
              className="p-2 my-2 bg-black opacity-70 border-2  w-full"
              placeholder="Enter your email "
              ref={email}
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="mx-2 mb-6">
            <label htmlFor="password">{t("password")}</label>

            <input
              type="password"
              name="password"
              id=""
              className="p-2  my-2  bg-black opacity-70border-2 border-white  w-full"
              ref={password}
              placeholder="Enter your password "
              autoComplete="off"
              autoFocus="on"
            />
          </div>

          <button className="bg-red-600  p-2 mx-2 my-2 mb-8">
            {isSignUpForm ? t("signUp") : t("signIn")}
          </button>

          <div
            className="text-white cursor-pointer mx-2 mb-20"
            onClick={handleFormChange}
          >
            {isSignUpForm ? (
              <h5>
                {t("alreadyHaveAnAccount")} <span> {t("signIn")}</span>
              </h5>
            ) : (
              <h5>
                {t("newLogin")}
                <span className=""> {t("signUp")}</span>
              </h5>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
