import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import App1 from "./App1";
import App2 from "./App2";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (
      window.sessionStorage.getItem("user") ||
      window.localStorage.getItem("user")
    ) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [isLoggedIn]);

  return login ? (
    <App1 setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <App2 setIsLoggedIn={setIsLoggedIn} />
  );
};

export default App;
