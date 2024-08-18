import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./login.css";
import { checkEmailAndPassword, auth } from "./util";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const { t } = useTranslation("login");
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordValue = password?.current?.value;
    const emailValue = email?.current?.value;
    const checkError = checkEmailAndPassword(emailValue, passwordValue);
    if (checkError === null) {
      if (isSignUpForm) {
        createNewUser(emailValue, passwordValue);
      } else {
        loginUser(emailValue, passwordValue);
      }
    } else {
      setError(checkError);
    }
  };

  const createNewUser = (username, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = {
          email: userCredential?.user.email,
          uid: userCredential?.user.uid,
          accessToken: userCredential?.user?.accessToken,
          displayName: userCredential?.user?.displayName,
          photoUrl: userCredential?.user?.photoURL,
        };
        dispatch({ type: "user/addUser", payload: user });
        setError("");
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log("errorCode", errorCode);
      });
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = {
          email: userCredential?.user.email,
          uid: userCredential?.user.uid,
          accessToken: userCredential?.user?.accessToken,
          displayName: userCredential?.user?.displayName,
          photoUrl: userCredential?.user?.photoURL,
        };
        dispatch({ type: "user/addUser", payload: user });
        setError("");
        navigate("/browse");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleFormChange = () => {
    setIsSignUpForm((prev) => !prev);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="md:h-[80vh] flex flex-col p-5 text-white">
          <div className="text-white py-4 text-xl font-bold">
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
              className="p-2 my-2  bg-black opacity-70border-2 border-white  w-full"
              ref={password}
              placeholder="Enter your password "
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div>
            <h4>
              {error && (
                <span className="mx-2 p-2 my-2 text-red-700 text-xl font-bold">
                  {error}
                </span>
              )}
            </h4>
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
                {t("alreadyHaveAnAccount")}
                <span className="font-bold"> {t("signIn")}</span>
              </h5>
            ) : (
              <h5>
                {t("newLogin")}
                <span className="font-bold"> {t("signUp")}</span>
              </h5>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
