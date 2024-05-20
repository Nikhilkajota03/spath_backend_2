import React from "react";
import { Link } from "react-router-dom";
import giffi from "../assets/animate2.mp4";
import "./LogoAnimate.css";

function LogoAnimate() {
  let route;
  // if (typeof window !== "undefined") {
  //   if (isLoggedIn == true) {
  //     route = "/welcome";

  // }
  return (
    <Link to="/welcome">
      <div className="animateDiv">
        <p>CLICK ANYWHERE TO CONTINUE</p>

        <video loop autoPlay muted width="80%">
          {" "}
          <source src={giffi} type="video/mp4" autoPlay="true" />{" "}
          {/* <p>CLICK ANYWHERE TO CONTINUE</p> */}
        </video>
      </div>
    </Link>
  );
}

export default LogoAnimate;
