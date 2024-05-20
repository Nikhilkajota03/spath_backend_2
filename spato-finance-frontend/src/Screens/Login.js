import React, { useContext, useState } from "react";
import "./login.css";

import { InfinitySpin } from "react-loader-spinner";
import { Link, useHistory } from "react-router-dom";
import { db, auth, storage } from "../Firebase";
import logo from "../assets/Translogo.png";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // const { username, setUserName } = useContext(UserContext);
  const history = useHistory();

  
  const handleFormSubmit = async (e) => {
    setSubmitting(true);

    e.preventDefault();

    auth
      .fetchSignInMethodsForEmail(email)
      .then((result) => {
        if (result.length > 0) {
          auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              auth.onAuthStateChanged((user) => {
                if (user) {
                  if (user.emailVerified) {
                    if (typeof window !== "undefined") {
                      window.sessionStorage.setItem("user", email);
                      window.localStorage.setItem("user", email);
                    }
                    setIsLoggedIn(true);
                    setSubmitting(false);
                  } else {
                    setSubmitting(false);
                    alert("Verify email to login");
                    history.push("/");
                  }
                }
              });
            });
        } else {
          alert("User not found! Register first");
          history.push("/signup");
        }
      })

      .catch(alert);
  };

  return (
    <div className="loginPage">
      {submitting === false ? (
        <div className="h-screen">
          <div className="login">
            <div className="logHead">
              <img
                src={logo}
                width="50"
                height="50"
                className="mr-2 mb-12 mt-3"
              />
              <h1 className="ml-2 text-2xl font-medium text-primary mt-4 mb-12 text-center">
                LOGIN
              </h1>
            </div>
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <div>
                <input
                  type="text"
                  className={`p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="username"
                  placeholder="Your Username"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  className={`w-full p-2 text-primary rounded-md outline-none text-sm mt-7 mb-5 transition duration-150 ease-in-out`}
                  id="password"
                  placeholder="Your Password"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="errorMsg text-red small">{errorMsg}</div>
              <div className="text-white">
                Don't have an account yet? <Link to="/signup">Sign up</Link>
              </div>
              <div className="flex justify-center items-center mt-6">
                <button
                  type="submit"
                  className="py-2 px-4 text-lg rounded btn-block"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <InfinitySpin width="200" color="#212121" />
      )}
      {/* <p className="mt-9 text-white">{login}</p> */}
    </div>
  );
};

export default Login;
